import React from "react";
import {Meta} from "@storybook/react";
import {spinner} from "@tera-ui/theme";

import {Spinner} from "../src";

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    labelColor: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
  },
  decorators: [
    (Story) => (
      <div className="ml-4">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Spinner>;

const defaultProps = {
  ...spinner.defaultVariants,
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const WithLabel = {
  args: {
    ...defaultProps,
    label: "Loading...",
  },
};
