import type { Meta, StoryObj } from "@storybook/react";
import { SearchJobForm } from "./search-job-form.component";
import { withRHF } from "test-utils/storybook/with-rhf";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof SearchJobForm> = {
  component: SearchJobForm,
  decorators: [withRHF, withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof SearchJobForm>;

export const SearchJob: Story = {
  args: {},
};
