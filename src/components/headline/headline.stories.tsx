import type { Meta, StoryObj } from "@storybook/react";
import { Headline } from "./headline.component";
import { withThemeProvider } from "test-utils/storybook/with-theme-provider";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof Headline> = {
  component: Headline,
  decorators: [withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof Headline>;

export const Sample: Story = {
  args: {
    children: "",
  },
};
