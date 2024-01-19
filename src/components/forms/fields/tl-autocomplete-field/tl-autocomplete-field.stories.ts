import type { Meta, StoryObj } from "@storybook/react";
import { Option, TLAutocompleteField } from "./tl-autocomplete-field.component";
import { withRHF } from "test-utils/storybook/with-rhf";

const options: Option[] = [
  { id: "one", label: "One" },
  { id: "two", label: "Two" },
];

const meta: Meta<typeof TLAutocompleteField> = {
  component: TLAutocompleteField,
  decorators: withRHF,
};

export default meta;
type Story = StoryObj<typeof TLAutocompleteField>;

export const SingleValue: Story = {
  args: {
    label: "Single Value Field",
    options,
  },
};

export const MultipleValue: Story = {
  args: {
    label: "Multiple Value Field",
    options,
    multiple: true,
  },
};

export const StandardVariant: Story = {
  args: {
    label: "Standard Variant",
    options,
    variant: "standard",
  },
};

export const HelperText: Story = {
  args: {
    label: "Helper Text",
    options,
    helperText: "sample helper text",
  },
};
