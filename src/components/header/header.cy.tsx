import { Header } from "./header.component";

describe("<Header />", () => {
  it("should render the header", () => {
    cy.mount(<Header />);

    cy.findByTestId("Header").should("exist");
    cy.findByTestId("Headline").should("exist");
    cy.findByTestId("Header.Description").should(
      "contains.text",
      "Great platform for the talent seeker"
    );
    cy.findByTestId("SearchJobForm.Container").should("exist");
    cy.findByTestId("Header.Popular").should(
      "have.text",
      "Popular: UI Design, Javascript"
    );
  });
});
