import {forwardRef, HTMLTeraUIProps} from "@tera-ui/system";
import {useDOMRef} from "@tera-ui/react-utils";

export interface PaginationCursorProps extends HTMLTeraUIProps<"span"> {
  /**
   * The current active page.
   */
  activePage?: number;
}

const PaginationCursor = forwardRef<"span", PaginationCursorProps>((props, ref) => {
  const {as, activePage, ...otherProps} = props;

  const Component = as || "span";
  const domRef = useDOMRef(ref);

  return (
    <Component ref={domRef} aria-hidden={true} {...otherProps}>
      {activePage}
    </Component>
  );
});

PaginationCursor.displayName = "TeraUI.PaginationCursor";

export default PaginationCursor;
