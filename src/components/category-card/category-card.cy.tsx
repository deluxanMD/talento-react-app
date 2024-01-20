import { AccountCircle } from "@mui/icons-material";
import { CategoryCard } from "./category-card.component";

const TestComponent = () => {
  const stub = cy.stub().as("handleClickStub");

  return (
    <CategoryCard
      Icon={AccountCircle}
      categoryTitle="Test"
      description="some text"
      data-testid="Test"
      handleClick={stub}
    />
  );
};

describe("<CategoryCard />", () => {
  it("should load the component", () => {
    cy.mount(<TestComponent />);

    cy.findByTestId("CategoryCard.Test").should("exist");
    cy.findByTestId("CategoryCard.Test.Title").should("have.text", "Test");
    cy.findByTestId("CategoryCard.Test.Description").should(
      "have.text",
      "some text"
    );
    cy.findByTestId("CategoryCard.Test").click();
    cy.get("@handleClickStub").should("have.been.called");
  });
});
