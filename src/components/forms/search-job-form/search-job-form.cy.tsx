import { SearchJobForm } from "./search-job-form.component";

describe("<SearchJobForm />", () => {
  it("should load the form", () => {
    cy.mount(<SearchJobForm />);
    cy.findByTestId("SearchJobForm.Container").should("exist");
    cy.findByTestId("SearchJobForm").should("exist");
    cy.findByTestId("SearchJobForm.Keyword").should("exist");
    cy.findByTestId("SearchJobForm.Country").should("exist");
  });

  it("should validate", () => {
    cy.mount(<SearchJobForm />);
    cy.findByTestId("TLLoadingButton").click();
    cy.findByTestId("SearchJobForm.Keyword.HelperText").should(
      "have.text",
      "Please provide a search keyword"
    );
    cy.findByTestId("SearchJobForm.Country.HelperText").should(
      "have.text",
      "I hope you belong to this earth ;-)"
    );
  });

  it("should submit form", () => {
    cy.mount(<SearchJobForm />);
    cy.findByTestId("SearchJobForm.Keyword").type("Software");
    cy.findByTestId("SearchJobForm.Country").type("Sri");
    cy.findByTestId("SearchJobForm.Country.Listbox")
      .findByRole("option")
      .eq(0)
      .click();
    cy.findByTestId("SearchJobForm.Country")
      .find("input")
      .should("have.value", "Sri Lanka");
    cy.findByTestId("TLLoadingButton").click();
  });
});
