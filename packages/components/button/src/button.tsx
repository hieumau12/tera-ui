import {Spinner} from "@tera-ui/spinner";
import {Ripple} from "@tera-ui/ripple";
import {forwardRef} from "@tera-ui/system";

import {UseButtonProps, useButton} from "./use-button";

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<"button", ButtonProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly,
  } = useButton({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...getButtonProps()}>
      {isLoading && spinnerPlacement === "start" && spinner}
      {startContent}
      {isLoading && isIconOnly ? null : children}
      {endContent}
      {isLoading && spinnerPlacement === "end" && spinner}
      {!disableRipple && <Ripple {...getRippleProps()} />}
    </Component>
  );
});

Button.displayName = "TeraUI.Button";

export default Button;
