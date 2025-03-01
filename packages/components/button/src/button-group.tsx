import {forwardRef} from "@tera-ui/system";

import {ButtonGroupProvider} from "./button-group-context";
import {UseButtonGroupProps, useButtonGroup} from "./use-button-group";

export interface ButtonGroupProps extends UseButtonGroupProps {}

const ButtonGroup = forwardRef<"div", ButtonGroupProps>((props, ref) => {
  const {Component, domRef, context, children, classNames, getButtonGroupProps} = useButtonGroup({
    ...props,
    ref,
  });

  return (
    <ButtonGroupProvider value={context}>
      <Component ref={domRef} className={classNames} {...getButtonGroupProps()}>
        {children}
      </Component>
    </ButtonGroupProvider>
  );
});

ButtonGroup.displayName = "TeraUI.ButtonGroup";

export default ButtonGroup;
