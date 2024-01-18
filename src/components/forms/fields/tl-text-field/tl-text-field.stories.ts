import type { Meta, StoryObj } from "@storybook/react";
import { TLTextField } from "./tl-text-field.component";
import { withRHF } from "../../../../test-utils/storybook/with-rhf";

const meta: Meta<typeof TLTextField> = {
  component: TLTextField,
  decorators: withRHF,
};

export default meta;
type Story = StoryObj<typeof TLTextField>;

export const TextField: Story = {
  args: {
    label: "TextField",
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password Field",
    type: "password",
  },
};

export const ErrorMessage: Story = {
  args: {
    label: "With Error",
    helperText: "something went wrong!",
    error: true,
  },
};
