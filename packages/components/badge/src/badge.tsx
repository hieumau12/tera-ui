import type {ReactNode} from "react";

import {forwardRef} from "@tera-ui/system-rsc";

import {UseBadgeProps, useBadge} from "./use-badge";

export interface BadgeProps extends UseBadgeProps {
  children: ReactNode;
}

const Badge = forwardRef<"span", BadgeProps>((props, ref) => {
  const {Component, children, content, slots, classNames, getBadgeProps} = useBadge({
    ...props,
  });

  return (
    <div className={slots.base({class: classNames?.base})}>
      {children}
      <Component ref={ref} {...getBadgeProps()}>
        {content}
      </Component>
    </div>
  );
});

Badge.displayName = "TeraUI.Badge";

export default Badge;
