import type {AriaTabPanelProps} from "@react-aria/tabs";

import {forwardRef, HTMLTeraUIProps} from "@tera-ui/system";
import {useDOMRef} from "@tera-ui/react-utils";
import {clsx} from "@tera-ui/shared-utils";
import {mergeProps} from "@react-aria/utils";
import {useTabPanel} from "@react-aria/tabs";
import {useFocusRing} from "@react-aria/focus";

import {ValuesType} from "./use-tabs";

interface Props extends HTMLTeraUIProps<"div"> {
  /**
   * The tab list state.
   */
  state: ValuesType["state"];
  /**
   * Component slots classes
   */
  slots: ValuesType["slots"];
  /**
   * User custom classnames
   */
  classNames?: ValuesType["classNames"];
}

export type TabPanelProps = Props & AriaTabPanelProps;

/**
 * @internal
 */
const TabPanel = forwardRef<"div", TabPanelProps>((props, ref) => {
  const {as, state, className, slots, classNames, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {tabPanelProps} = useTabPanel(props, state, domRef);
  const {focusProps, isFocused, isFocusVisible} = useFocusRing();

  const selectedItem = state.selectedItem;

  const content = selectedItem?.props?.children;

  const tabPanelStyles = clsx(classNames?.panel, className, selectedItem?.props?.className);

  if (!content) {
    return null;
  }

  return (
    <Component
      ref={domRef}
      data-focus={isFocused}
      data-focus-visible={isFocusVisible}
      {...mergeProps(tabPanelProps, focusProps, otherProps)}
      className={slots.panel?.({class: tabPanelStyles})}
      data-slot="panel"
    >
      {content}
    </Component>
  );
});

TabPanel.displayName = "TeraUI.TabPanel";

export default TabPanel;
