import { FormWrapper } from "test-utils/forms-test-utils";
import { TLPasswordField } from "./tl-password-field.component";
import { useForm } from "react-hook-form";

const TestComponent = () => {
  const form = useForm();

  return (
    <FormWrapper formMethods={form}>
      <TLPasswordField name="test field" data-testid="Test.Password.Field" />
    </FormWrapper>
  );
};

describe("<TLPasswordField />", () => {
  it("should load the password field component", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("Test.Password.Field").should("exist");
  });
});
