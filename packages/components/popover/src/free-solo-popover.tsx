/**
 * FreeSoloPopover
 *
 * This is a popover that is not tied to a trigger. It is used for the free solo
 * select component.
 *
 * @internal
 */

import * as React from "react";
import {DismissButton, Overlay} from "@react-aria/overlays";
import {forwardRef} from "@tera-ui/system";
import {HTMLMotionProps, motion} from "framer-motion";
import {mergeProps} from "@react-aria/utils";
import {getTransformOrigins} from "@tera-ui/aria-utils";
import {TRANSITION_VARIANTS} from "@tera-ui/framer-transitions";

import {usePopover, UsePopoverProps, UsePopoverReturn} from "./use-popover";

export interface FreeSoloPopoverProps extends UsePopoverProps {
  children: React.ReactNode;
}

type FreeSoloPopoverWrapperProps = {
  children: React.ReactNode;
  disableAnimation: boolean;
  placement: UsePopoverReturn["placement"];
  motionProps?: UsePopoverProps["motionProps"];
} & React.HTMLAttributes<HTMLDivElement>;

const FreeSoloPopoverWrapper = ({
  children,
  motionProps,
  placement,
  disableAnimation,
  style = {},
  ...otherProps
}: FreeSoloPopoverWrapperProps) => {
  return disableAnimation ? (
    <div {...otherProps}>{children}</div>
  ) : (
    <motion.div
      animate="enter"
      exit="exit"
      initial="initial"
      style={{
        ...style,
        ...getTransformOrigins(placement === "center" ? "top" : placement),
      }}
      variants={TRANSITION_VARIANTS.scaleSpringOpacity}
      {...mergeProps(otherProps, motionProps)}
    >
      {children}
    </motion.div>
  );
};

const FreeSoloPopover = forwardRef<"div", FreeSoloPopoverProps>((props, ref) => {
  const {
    Component,
    state,
    children,
    placement,
    backdrop,
    portalContainer,
    disableAnimation,
    motionProps,
    isNonModal,
    getPopoverProps,
    getBackdropProps,
    getDialogProps,
    getContentProps,
  } = usePopover({
    ...props,
    // avoid closing the popover when navigating with the keyboard
    shouldCloseOnInteractOutside: undefined,
    ref,
  });

  const backdropContent = React.useMemo(() => {
    if (backdrop === "transparent") {
      return null;
    }

    if (disableAnimation) {
      return <div {...getBackdropProps()} />;
    }

    return (
      <motion.div
        animate="enter"
        exit="exit"
        initial="exit"
        variants={TRANSITION_VARIANTS.fade}
        {...(getBackdropProps() as HTMLMotionProps<"div">)}
      />
    );
  }, [backdrop, disableAnimation, getBackdropProps]);

  return (
    <Overlay portalContainer={portalContainer}>
      {!isNonModal && backdropContent}
      <Component {...getPopoverProps()}>
        <FreeSoloPopoverWrapper
          disableAnimation={disableAnimation}
          motionProps={motionProps}
          placement={placement}
          tabIndex={-1}
          {...getDialogProps()}
        >
          {!isNonModal && <DismissButton onDismiss={state.close} />}
          <div {...getContentProps()}>{children}</div>
          <DismissButton onDismiss={state.close} />
        </FreeSoloPopoverWrapper>
      </Component>
    </Overlay>
  );
});

FreeSoloPopover.displayName = "TeraUI.FreeSoloPopover";

export default FreeSoloPopover;
