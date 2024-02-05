import type { Meta, StoryObj } from "@storybook/react";
import { CategoryCard } from "./category-card.component";
import { AccountCircle } from "@mui/icons-material";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof CategoryCard> = {
  component: CategoryCard,
  decorators: [withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const AccountCard: Story = {
  args: {
    Icon: AccountCircle,
    categoryTitle: "Accounts",
    description: "some text here",
  },
};
