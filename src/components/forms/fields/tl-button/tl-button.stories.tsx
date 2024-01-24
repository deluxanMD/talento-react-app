import type { Meta, StoryObj } from "@storybook/react";
import { TLButton } from "./tl-button.component";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof TLButton> = {
  component: TLButton,
  decorators: [withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof TLButton>;

export const TextButton: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
};

export const OutlinedButton: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};

export const ContainedButton: Story = {
  args: {
    variant: "contained",
    children: "Contained",
  },
};
