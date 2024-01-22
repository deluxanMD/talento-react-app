import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo.component";

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const WithName: Story = {
  args: {
    withName: true,
  },
};

export const WithoutName: Story = {
  args: {
    withName: false,
  },
};
