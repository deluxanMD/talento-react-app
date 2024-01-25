import { ReduxWrapper } from "test-utils/redux-test-utils";
import { TLAppbar } from "./tl-appbar.component";

const TestComponent = () => {
  return (
    <ReduxWrapper>
      <TLAppbar />
    </ReduxWrapper>
  );
};

describe("<TLAppbar />", () => {
  it("desktop", () => {
    cy.viewport(1080, 720);
    cy.mount(<TestComponent />);

    cy.findByTestId("AppBar.Container").should("exist");
    cy.findByTestId("AppBar.Desktop.Menu").should("exist");
    cy.findByTestId("AppBar.Desktop.MenuItem").should("have.length", 2);
    cy.findByTestId("AppBar.Desktop.MenuItem")
      .eq(0)
      .should("have.text", "Talents");
    cy.findByTestId("AppBar.Desktop.MenuItem")
      .eq(1)
      .should("have.text", "Members");

    cy.findByTestId("MenuIcon").should("be.hidden");

    cy.findByTestId("AppBar.Mobile.Menu").should("be.hidden");

    cy.findByTestId("AppBar.Desktop.Login").should("exist");
    cy.findByTestId("AppBar.Desktop.Signup").should("exist");

    cy.findByTestId("AppBar.Theme.Toggle").should("exist");
    cy.findByTestId("DarkModeIcon").should("exist");
    cy.window()
      .its("store")
      .invoke("getState")
      .its("theme")
      .should("deep.equal", { mode: "light" });

    cy.findByTestId("AppBar.Theme.Toggle").click();

    cy.window()
      .its("store")
      .invoke("dispatch", { type: "theme/setMode", payload: "dark" });

    cy.findByTestId("LightModeIcon").should("exist");
    cy.window()
      .its("store")
      .invoke("getState")
      .its("theme")
      .should("deep.equal", { mode: "dark" });
  });

  it("mobile", () => {
    cy.mount(<TestComponent />);

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
