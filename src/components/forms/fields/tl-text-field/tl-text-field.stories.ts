import type { Meta, StoryObj } from "@storybook/react";
import { TLTextField } from "./tl-text-field.component";
import { withRHF } from "../../../../test-utils/storybook/with-rhf";

const meta: Meta<typeof TLTextField> = {
  component: TLTextField,
  decorators: withRHF,
};

export default meta;
type Story = StoryObj<typeof TLTextField>;

export const Sample: Story = {
  args: {
    label: "sample label",
  },
};
