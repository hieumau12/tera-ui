export {Section as BaseSection} from "@react-stately/collections";
import {SectionProps as BaseSectionProps} from "@react-types/shared";
import {HTMLTeraUIProps, As} from "@tera-ui/system";

/**
 * A modified version of the SectionProps from @react-types/shared, with the addition of the TeraUI props.
 *
 */
export type SectionProps<Type extends As = "div", T extends object = {}> = BaseSectionProps<T> &
  HTMLTeraUIProps<Type>;
