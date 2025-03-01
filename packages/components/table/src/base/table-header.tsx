import {HTMLTeraUIProps} from "@tera-ui/system";
import {TableHeader as TableHeaderBase} from "@react-stately/table";
import {TableHeaderProps as TableHeaderBaseProps} from "@react-types/table";

export type TableHeaderProps<T> = TableHeaderBaseProps<T> &
  Omit<HTMLTeraUIProps<"thead">, keyof TableHeaderBaseProps<T>>;

const TableHeader = TableHeaderBase as <T>(props: TableHeaderProps<T>) => JSX.Element;

export default TableHeader;
