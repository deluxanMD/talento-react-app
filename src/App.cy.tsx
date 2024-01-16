import App from "./App";

describe("<App />", () => {
  it("should load the component", () => {
    cy.mount(<App />);
  });
});
