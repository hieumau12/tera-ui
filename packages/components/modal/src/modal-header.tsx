import {useEffect} from "react";
import {forwardRef, HTMLTeraUIProps} from "@tera-ui/system";
import {useDOMRef} from "@tera-ui/react-utils";
import {clsx} from "@tera-ui/shared-utils";

import {useModalContext} from "./modal-context";

export interface ModalHeaderProps extends HTMLTeraUIProps<"header"> {}

const ModalHeader = forwardRef<"header", ModalHeaderProps>((props, ref) => {
  const {as, children, className, ...otherProps} = props;

  const {slots, classNames, headerId, setHeaderMounted} = useModalContext();

  const domRef = useDOMRef(ref);

  const Component = as || "header";

  /**
   * Notify us if this component was rendered or used,
   * so we can append `aria-labelledby` automatically
   */
  useEffect(() => {
    setHeaderMounted(true);

    return () => setHeaderMounted(false);
  }, [setHeaderMounted]);

  return (
    <Component
      ref={domRef}
      className={slots.header({class: clsx(classNames?.header, className)})}
      id={headerId}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ModalHeader.displayName = "TeraUI.ModalHeader";

export default ModalHeader;
