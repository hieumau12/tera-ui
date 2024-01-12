import {forwardRef} from "@tera-ui/system";
import {LinkIcon} from "@tera-ui/shared-icons";
import {linkAnchorClasses} from "@tera-ui/theme";

import {UseLinkProps, useLink} from "./use-link";

export interface LinkProps extends UseLinkProps {}

const Link = forwardRef<"a", LinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ref,
    ...props,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

Link.displayName = "TeraUI.Link";

export default Link;
