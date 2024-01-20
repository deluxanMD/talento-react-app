import { Logo } from "./logo.component";

describe("<Logo />", () => {
  it("should load the logo", () => {
    cy.mount(<Logo />);
    cy.findByTestId("Logo.Container").should("exist");
    cy.findByTestId("WorkIcon").should("exist");
    cy.findByTestId("Logo.Container").find("h4").should("have.text", "Talento");
  });
});
