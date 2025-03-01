import {forwardRef} from "@tera-ui/system";

import {CheckboxGroupProvider} from "./checkbox-group-context";
import {UseCheckboxGroupProps, useCheckboxGroup} from "./use-checkbox-group";

export interface CheckboxGroupProps extends UseCheckboxGroupProps {}

const CheckboxGroup = forwardRef<"div", CheckboxGroupProps>((props, ref) => {
  const {
    children,
    context,
    label,
    description,
    errorMessage,
    getGroupProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
  } = useCheckboxGroup({...props, ref});

  return (
    <div {...getGroupProps()}>
      {label && <span {...getLabelProps()}>{label}</span>}
      <div {...getWrapperProps()}>
        <CheckboxGroupProvider value={context}>{children}</CheckboxGroupProvider>
      </div>
      {errorMessage ? (
        <div {...getErrorMessageProps()}>
          <>{errorMessage}</>
        </div>
      ) : description ? (
        <div {...getDescriptionProps()}>{description}</div>
      ) : null}
    </div>
  );
});

CheckboxGroup.displayName = "TeraUI.CheckboxGroup";

export default CheckboxGroup;
