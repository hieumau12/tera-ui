import type {FocusableProps, PressEvents} from "@react-types/shared";
import type {SlotsToClasses, CardSlots, CardReturnType, CardVariantProps} from "@tera-ui/theme";
import type {AriaButtonProps} from "@tera-ui/use-aria-button";
import type {RippleProps} from "@tera-ui/ripple";

import {card} from "@tera-ui/theme";
import {MouseEvent, ReactNode, useCallback, useMemo} from "react";
import {chain, mergeProps} from "@react-aria/utils";
import {useFocusRing} from "@react-aria/focus";
import {useHover} from "@react-aria/interactions";
import {useAriaButton} from "@tera-ui/use-aria-button";
import {HTMLNextUIProps, mapPropsVariants, PropGetter} from "@tera-ui/system";
import {clsx, dataAttr} from "@tera-ui/shared-utils";
import {ReactRef, filterDOMProps} from "@tera-ui/react-utils";
import {useDOMRef} from "@tera-ui/react-utils";
import {useRipple} from "@tera-ui/ripple";

export interface Props extends HTMLNextUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * Usually the Card parts, `CardHeader`, `CardBody` and `CardFooter`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Whether the card should show a ripple animation on press, this prop is ignored if `disableAnimation` is true or `isPressable` is false.
   * @default false
   */
  disableRipple?: boolean;

  /**
   * Whether the card should allow text selection on press. (only for pressable cards)
   * @default true
   */
  allowTextSelectionOnPress?: boolean;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Card classNames={{
   *    base:"base-classes",
   *    header: "dot-classes",
   *    body: "content-classes",
   *    footer: "avatar-classes",
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<CardSlots>;
}

export type UseCardProps = Props & PressEvents & FocusableProps & CardVariantProps;

export type ContextType = {
  slots: CardReturnType;
  classNames?: SlotsToClasses<CardSlots>;
  isDisabled?: CardVariantProps["isDisabled"];
  isFooterBlurred?: CardVariantProps["isFooterBlurred"];
  disableAnimation?: CardVariantProps["disableAnimation"];
  fullWidth?: CardVariantProps["fullWidth"];
};

export function useCard(originalProps: UseCardProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, card.variantKeys);

  const {
    ref,
    as,
    children,
    disableRipple = false,
    onClick,
    onPress,
    autoFocus,
    className,
    classNames,
    allowTextSelectionOnPress = true,
    ...otherProps
  } = props;

  const domRef = useDOMRef<HTMLDivElement>(ref);
  const Component = as || (originalProps.isPressable ? "button" : "div");
  const shouldFilterDOMProps = typeof Component === "string";

  const baseStyles = clsx(classNames?.base, className);

  const {onClick: onRippleClickHandler, onClear: onClearRipple, ripples} = useRipple();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!originalProps.disableAnimation && !disableRipple && domRef.current) {
      onRippleClickHandler(e);
    }
  };

  const {buttonProps, isPressed} = useAriaButton(
    {
      onPress,
      elementType: as,
      isDisabled: !originalProps.isPressable,
      onClick: chain(onClick, handleClick),
      allowTextSelectionOnPress,
      ...otherProps,
    } as unknown as AriaButtonProps<"button">,
    domRef,
  );

  const {hoverProps, isHovered} = useHover({
    isDisabled: !originalProps.isHoverable,
    ...otherProps,
  });

  const {isFocusVisible, isFocused, focusProps} = useFocusRing({
    autoFocus,
  });

  const slots = useMemo(
    () =>
      card({
        ...variantProps,
      }),
    [...Object.values(variantProps)],
  );

  const context = useMemo<ContextType>(
    () => ({
      isDisabled: originalProps.isDisabled,
      isFooterBlurred: originalProps.isFooterBlurred,
      disableAnimation: originalProps.disableAnimation,
      fullWidth: originalProps.fullWidth,
      slots,
      classNames,
    }),
    [
      slots,
      classNames,
      originalProps.isDisabled,
      originalProps.isFooterBlurred,
      originalProps.disableAnimation,
      originalProps.fullWidth,
    ],
  );

  const getCardProps = useCallback<PropGetter>(
    (props = {}) => {
      return {
        ref: domRef,
        className: slots.base({class: baseStyles}),
        tabIndex: originalProps.isPressable ? 0 : -1,
        "data-hover": dataAttr(isHovered),
        "data-pressed": dataAttr(isPressed),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-disabled": dataAttr(originalProps.isDisabled),
        ...mergeProps(
          originalProps.isPressable ? {...buttonProps, ...focusProps, role: "button"} : {},
          originalProps.isHoverable ? hoverProps : {},
          filterDOMProps(otherProps, {
            enabled: shouldFilterDOMProps,
          }),
          filterDOMProps(props),
        ),
      };
    },
    [
      domRef,
      slots,
      baseStyles,
      shouldFilterDOMProps,
      originalProps.isPressable,
      originalProps.isHoverable,
      originalProps.isDisabled,
      isHovered,
      isPressed,
      isFocusVisible,
      buttonProps,
      focusProps,
      hoverProps,
      otherProps,
    ],
  );

  const getRippleProps = useCallback<() => RippleProps>(
    () => ({ripples, onClear: onClearRipple}),
    [ripples, onClearRipple],
  );

  return {
    context,
    domRef,
    Component,
    classNames,
    children,
    isHovered,
    isPressed,
    isPressable: originalProps.isPressable,
    isHoverable: originalProps.isHoverable,
    disableAnimation: originalProps.disableAnimation,
    disableRipple,
    handleClick,
    isFocusVisible,
    getCardProps,
    getRippleProps,
  };
}

export type UseCardReturn = ReturnType<typeof useCard>;
