import type { Meta, StoryObj } from "@storybook/react";
import { TLPasswordField } from "./tl-password-field.component";
import { withRHF } from "test-utils/storybook/with-rhf";

const meta: Meta<typeof TLPasswordField> = {
  component: TLPasswordField,
  decorators: withRHF,
};

export default meta;
type Story = StoryObj<typeof TLPasswordField>;

export const PasswordField: Story = {
  args: {
    label: "Password Field",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password Field",
    helperText: "Helper Text",
  },
};

export const WithError: Story = {
  args: {
    label: "Password Field",
    helperText: "Error Message",
    error: true,
  },
};
