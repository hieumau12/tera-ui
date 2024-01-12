import {forwardRef, HTMLTeraUIProps} from "@tera-ui/system";
import {useDOMRef} from "@tera-ui/react-utils";
import {clsx} from "@tera-ui/shared-utils";

import {useModalContext} from "./modal-context";

export interface ModalFooterProps extends HTMLTeraUIProps<"footer"> {}

const ModalFooter = forwardRef<"footer", ModalFooterProps>((props, ref) => {
  const {as, children, className, ...otherProps} = props;

  const {slots, classNames} = useModalContext();

  const domRef = useDOMRef(ref);

  const Component = as || "footer";

  return (
    <Component
      ref={domRef}
      className={slots.footer({class: clsx(classNames?.footer, className)})}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ModalFooter.displayName = "TeraUI.ModalFooter";

export default ModalFooter;
