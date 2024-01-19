import { SearchRounded } from "@mui/icons-material";
import { TLLoadingButton } from "./tl-loading-button.component";

describe("<TLLoadingButton />", () => {
  it("should load the buton with loading animation", () => {
    cy.mount(
      <TLLoadingButton loading={true} Icon={SearchRounded}>
        Test Button
      </TLLoadingButton>
    );
    cy.findByTestId("TLLoadingButton").should("have.class", "Mui-disabled");
    cy.findByRole("progressbar").should("exist");
  });

  it("should load the buton without loading animation", () => {
    cy.mount(
      <TLLoadingButton Icon={SearchRounded}>Test Button</TLLoadingButton>
    );
    cy.findByTestId("TLLoadingButton").should("not.have.class", "Mui-disabled");
    cy.findByRole("progressbar").should("not.exist");
  });
});
