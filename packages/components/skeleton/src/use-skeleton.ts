import type {SkeletonVariantProps, SkeletonSlots, SlotsToClasses} from "@tera-ui/theme";
import type {HTMLTeraUIProps, PropGetter} from "@tera-ui/system-rsc";

import {mapPropsVariants} from "@tera-ui/system-rsc";
import {skeleton} from "@tera-ui/theme";
import {clsx, dataAttr} from "@tera-ui/shared-utils";
import {useMemo, Ref} from "react";

interface Props extends HTMLTeraUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement | null>;
  /**
   * The skeleton will be visible while isLoading is `false`.
   * @default false
   */
  isLoaded?: boolean;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Skeleton classNames={{
   *    base:"base-classes", // skeleton wrapper
   *    content: "content-classes", // children wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<SkeletonSlots>;
}

export type UseSkeletonProps = Props & SkeletonVariantProps;

export function useSkeleton(originalProps: UseSkeletonProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, skeleton.variantKeys);

  const {as, children, isLoaded = false, className, classNames, ...otherProps} = props;

  const Component = as || "div";

  const slots = useMemo(
    () =>
      skeleton({
        ...variantProps,
      }),
    [...Object.values(variantProps), children],
  );

  const baseStyles = clsx(classNames?.base, className);

  const getSkeletonProps: PropGetter = (props = {}) => {
    return {
      "data-loaded": dataAttr(isLoaded),
      className: slots.base({class: clsx(baseStyles, props?.className)}),
      ...otherProps,
    };
  };

  const getContentProps: PropGetter = (props = {}) => {
    return {
      className: slots.content({class: clsx(classNames?.content, props?.className)}),
    };
  };

  return {Component, children, slots, classNames, getSkeletonProps, getContentProps};
}

export type UseSkeletonReturn = ReturnType<typeof useSkeleton>;
