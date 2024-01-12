import {forwardRef} from "@tera-ui/system";

import {usePaginationItem, UsePaginationItemProps} from "./use-pagination-item";

export interface PaginationItemProps extends UsePaginationItemProps {}

const PaginationItem = forwardRef<"li", PaginationItemProps>((props, ref) => {
  const {Component, children, getItemProps} = usePaginationItem({...props, ref});

  return <Component {...getItemProps()}>{children}</Component>;
});

PaginationItem.displayName = "TeraUI.PaginationItem";

export default PaginationItem;
