import type {AriaDialogProps} from "@react-aria/dialog";
import type {HTMLMotionProps} from "framer-motion";

import {DOMAttributes, ReactNode, useMemo, useRef} from "react";
import {forwardRef} from "@tera-ui/system";
import {DismissButton} from "@react-aria/overlays";
import {TRANSITION_VARIANTS} from "@tera-ui/framer-transitions";
import {motion} from "framer-motion";
import {useDialog} from "@react-aria/dialog";
import {mergeProps} from "@react-aria/utils";
import {HTMLTeraUIProps} from "@tera-ui/system";
import {RemoveScroll} from "react-remove-scroll";
import {getTransformOrigins} from "@tera-ui/aria-utils";

import {usePopoverContext} from "./popover-context";

export interface PopoverContentProps
  extends AriaDialogProps,
    Omit<HTMLTeraUIProps, "children" | "role"> {
  children: ReactNode | ((titleProps: DOMAttributes<HTMLElement>) => ReactNode);
}

const PopoverContent = forwardRef<"div", PopoverContentProps>((props, _) => {
  const {as, children, className, ...otherProps} = props;

  const {
    Component: OverlayComponent,
    isOpen,
    placement,
    motionProps,
    backdrop,
    disableAnimation,
    shouldBlockScroll,
    getPopoverProps,
    getDialogProps,
    getBackdropProps,
    getContentProps,
    isNonModal,
    onClose,
  } = usePopoverContext();

  const Component = as || OverlayComponent || "div";

  const dialogRef = useRef(null);
  const {dialogProps, titleProps} = useDialog({}, dialogRef);

  // Not needed in the popover context, the popover role comes from getPopoverProps
  delete dialogProps.role;

  const content = (
    <>
      {!isNonModal && <DismissButton onDismiss={onClose} />}
      <Component {...getDialogProps(mergeProps(dialogProps, otherProps))} ref={dialogRef}>
        <div {...getContentProps({className})}>
          {typeof children === "function" ? children(titleProps) : children}
        </div>
      </Component>
      <DismissButton onDismiss={onClose} />
    </>
  );

  const backdropContent = useMemo(() => {
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
    <div {...getPopoverProps()}>
      {backdropContent}
      <RemoveScroll forwardProps enabled={shouldBlockScroll && isOpen} removeScrollBar={false}>
        {disableAnimation ? (
          content
        ) : (
          <motion.div
            animate="enter"
            exit="exit"
            initial="initial"
            style={{
              ...getTransformOrigins(placement === "center" ? "top" : placement),
            }}
            variants={TRANSITION_VARIANTS.scaleSpringOpacity}
            {...motionProps}
          >
            {content}
          </motion.div>
        )}
      </RemoveScroll>
    </div>
  );
});

PopoverContent.displayName = "TeraUI.PopoverContent";

export default PopoverContent;
