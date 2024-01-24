import { Headline } from "./headline.component";

describe("<Headline />", () => {
  it("should render the component", () => {
    cy.mount(<Headline />);

    cy.findByTestId("Headline").should("exist");
    cy.findByTestId("Headline")
      .find("h4")
      .eq(0)
      .should("have.text", "Discover");
    cy.findByTestId("Headline")
      .find("h4")
      .eq(1)
      .should("have.text", "more than");
    cy.findByTestId("Headline")
      .find("h4")
      .eq(2)
      .should("have.text", "5000+ talents");
    cy.findByTestId("Headline").find("hr").should("exist");
  });
});
