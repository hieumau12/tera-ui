import {forwardRef, HTMLTeraUIProps} from "@tera-ui/system";
import {useDOMRef} from "@tera-ui/react-utils";
import {clsx} from "@tera-ui/shared-utils";
import {useTableRowGroup} from "@react-aria/table";
import {mergeProps} from "@react-aria/utils";

import {ValuesType} from "./use-table";

export interface TableRowGroupProps extends HTMLTeraUIProps<"thead"> {
  slots: ValuesType["slots"];
  classNames?: ValuesType["classNames"];
}

const TableRowGroup = forwardRef<"thead", TableRowGroupProps>((props, ref) => {
  const {as, className, children, slots, classNames, ...otherProps} = props;

  const Component = as || "thead";
  const domRef = useDOMRef(ref);

  const {rowGroupProps} = useTableRowGroup();

  const theadStyles = clsx(classNames?.thead, className);

  return (
    <Component
      ref={domRef}
      className={slots.thead?.({class: theadStyles})}
      {...mergeProps(rowGroupProps, otherProps)}
    >
      {children}
    </Component>
  );
});

TableRowGroup.displayName = "TeraUI.TableRowGroup";

export default TableRowGroup;
