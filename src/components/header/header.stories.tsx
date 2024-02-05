import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header.component";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HomepageHeader: Story = {
  args: {},
};
