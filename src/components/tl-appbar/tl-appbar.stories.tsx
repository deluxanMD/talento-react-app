import type { Meta, StoryObj } from "@storybook/react";
import { TLAppbar } from "./tl-appbar.component";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof TLAppbar> = {
  component: TLAppbar,
  decorators: [withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof TLAppbar>;

export const Appbar: Story = {
  args: {},
};
