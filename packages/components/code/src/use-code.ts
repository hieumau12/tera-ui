import type {CodeVariantProps} from "@tera-ui/theme";
import type {HTMLNextUIProps, PropGetter} from "@tera-ui/system-rsc";

import {code} from "@tera-ui/theme";
import {mapPropsVariants} from "@tera-ui/system-rsc";
import {ReactRef} from "@tera-ui/react-utils";
import {useMemo} from "react";

export interface UseCodeProps extends HTMLNextUIProps<"code">, CodeVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export function useCode(originalProps: UseCodeProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, code.variantKeys);

  const {as, children, className, ...otherProps} = props;

  const Component = as || "code";

  const classNames = useMemo(
    () =>
      code({
        ...variantProps,
        className,
      }),
    [...Object.values(variantProps), className],
  );

  const getCodeProps: PropGetter = () => {
    return {
      className: classNames,
      ...otherProps,
    };
  };

  return {Component, children, getCodeProps};
}

export type UseCodeReturn = ReturnType<typeof useCode>;
