import type { Meta, StoryObj } from "@storybook/react";
import { TLLoadingButton } from "./tl-loading-button.component";

const meta: Meta<typeof TLLoadingButton> = {
  component: TLLoadingButton,
};

export default meta;
type Story = StoryObj<typeof TLLoadingButton>;

export const TextLoading: Story = {
  args: {
    children: "Test Button",
    loading: true,
  },
};

export const TextNotLoading: Story = {
  args: {
    children: "Test Button",
  },
};

export const ContainedLoading: Story = {
  args: {
    children: "Test Button",
    loading: true,
    variant: "contained",
  },
};

export const ContainedNotLoading: Story = {
  args: {
    children: "Test Button",
    variant: "contained",
  },
};

export const OutlinedLoading: Story = {
  args: {
    children: "Test Button",
    loading: true,
    variant: "outlined",
  },
};

export const OutlinedNotLoading: Story = {
  args: {
    children: "Test Button",
    variant: "outlined",
  },
};
