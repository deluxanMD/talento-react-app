import type { Meta, StoryObj } from "@storybook/react";
import { TLButton } from "./tl-button.component";

const meta: Meta<typeof TLButton> = {
  component: TLButton,
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
