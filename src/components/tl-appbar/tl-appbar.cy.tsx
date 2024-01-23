import { TLAppbar } from "./tl-appbar.component";

describe("<TLAppbar />", () => {
  it("desktop", () => {
    cy.viewport(1080, 720);
    cy.mount(<TLAppbar />);

    cy.findByTestId("AppBar.Container").should("exist");
    cy.findByTestId("AppBar.Desktop.Menu").should("exist");
    cy.findByTestId("AppBar.Desktop.MenuItem").should("have.length", 2);
    cy.findByTestId("AppBar.Desktop.MenuItem")
      .eq(0)
      .should("have.text", "Jobs");
    cy.findByTestId("AppBar.Desktop.MenuItem")
      .eq(1)
      .should("have.text", "Companies");

    cy.findByTestId("MenuIcon").should("be.hidden");

    cy.findByTestId("AppBar.Mobile.Menu").should("be.hidden");

    cy.findByTestId("AppBar.Desktop.Login").should("exist");
    cy.findByTestId("AppBar.Desktop.Signup").should("exist");
  });

  it("mobile", () => {
    cy.mount(<TLAppbar />);

    cy.findByTestId("AppBar.Container").should("exist");
    cy.findByTestId("AppBar.Desktop.Menu").should("be.hidden");
    cy.findByTestId("AppBar.Desktop.MenuItem").should("be.hidden");

    cy.findByTestId("MenuIcon").should("exist");

    cy.findByTestId("AppBar.Mobile.Menu").should("exist");

    cy.findByTestId("AppBar.Mobile.MenuItem").should("be.hidden");
    cy.findByTestId("MenuIcon").click();
    cy.findByTestId("AppBar.Mobile.MenuItem").should("be.visible");

    cy.findByTestId("AppBar.Mobile.MenuItem").should("have.length", 4);
    cy.findByTestId("AppBar.Mobile.MenuItem")
      .eq(0)
      .should("have.text", "Talents");
    cy.findByTestId("AppBar.Mobile.MenuItem")
      .eq(1)
      .should("have.text", "Members");
    cy.findByTestId("AppBar.Mobile.MenuItem")
      .eq(2)
      .should("have.text", "Login");
    cy.findByTestId("AppBar.Mobile.MenuItem")
      .eq(3)
      .should("have.text", "Signup");

    cy.findByTestId("AppBar.Mobile.MenuItem").eq(0).click();
    cy.findByTestId("AppBar.Mobile.MenuItem").eq(0).should("be.hidden");

    cy.findByTestId("AppBar.Desktop.Login").should("be.hidden");
    cy.findByTestId("AppBar.Desktop.Signup").should("be.hidden");
  });
});
