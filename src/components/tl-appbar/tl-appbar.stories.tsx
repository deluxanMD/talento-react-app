import type { Meta, StoryObj } from "@storybook/react";
import { TLAppbar } from "./tl-appbar.component";

const meta: Meta<typeof TLAppbar> = {
  component: TLAppbar,
};

export default meta;
type Story = StoryObj<typeof TLAppbar>;

export const Appbar: Story = {
  args: {},
};
