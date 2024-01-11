import {forwardRef} from "@tera-ui/system";
import {Tooltip} from "@tera-ui/tooltip";
import {renderFn} from "@tera-ui/react-utils";
import {VisuallyHidden} from "@react-aria/visually-hidden";

import {UseSliderThumbProps, useSliderThumb} from "./use-slider-thumb";

export interface SliderThumbProps extends UseSliderThumbProps {}

const SliderThumb = forwardRef<"div", SliderThumbProps>((props, ref) => {
  const {
    Component,
    index,
    renderThumb,
    showTooltip,
    getTooltipProps,
    getThumbProps,
    getInputProps,
  } = useSliderThumb({
    ...props,
    ref,
  });

  const thumbProps = {
    ...getThumbProps(),
    index,
    children: (
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
    ),
  };

  const content = renderFn({
    Component,
    props: thumbProps,
    renderCustom: renderThumb,
  }) as React.ReactElement;

  return showTooltip ? <Tooltip {...getTooltipProps()}>{content}</Tooltip> : content;
});

SliderThumb.displayName = "NextUI.SliderThumb";

export default SliderThumb;
