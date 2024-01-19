import type { Meta, StoryObj } from "@storybook/react";
import { TLLoadingButton } from "./tl-loading-button.component";
import { SearchRounded } from "@mui/icons-material";

const meta: Meta<typeof TLLoadingButton> = {
  component: TLLoadingButton,
};

export default meta;
type Story = StoryObj<typeof TLLoadingButton>;

export const TextLoading: Story = {
  args: {
    children: "Test Button",
    loading: true,
    startIcon: <SearchRounded />,
  },
};

export const TextNotLoading: Story = {
  args: {
    children: "Test Button",
    startIcon: <SearchRounded />,
  },
};

export const ContainedLoading: Story = {
  args: {
    children: "Test Button",
    loading: true,
    startIcon: <SearchRounded />,
    variant: "contained",
  },
};

export const ContainedNotLoading: Story = {
  args: {
    children: "Test Button",
    variant: "contained",
    startIcon: <SearchRounded />,
  },
};

export const OutlinedLoading: Story = {
  args: {
    children: "Test Button",
    loading: true,
    startIcon: <SearchRounded />,
    variant: "outlined",
  },
};

export const OutlinedNotLoading: Story = {
  args: {
    children: "Test Button",
    variant: "outlined",
    startIcon: <SearchRounded />,
  },
};
