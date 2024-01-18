import { FormWrapper } from "test-utils/forms-test-utils";
import { TLPasswordField } from "./tl-password-field.component";
import { useForm } from "react-hook-form";

const TestComponent = ({ dataTestId }: { dataTestId?: string }) => {
  const form = useForm();

  return (
    <FormWrapper formMethods={form}>
      <TLPasswordField name="test field" data-testid={dataTestId} />
    </FormWrapper>
  );
};

describe("<TLPasswordField />", () => {
  it("should load the password field component", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("TLPasswordField").should("exist");
  });

  it("should load with custom test id", () => {
    cy.mount(<TestComponent dataTestId="Test.Password.Field" />);
    cy.findByTestId("Test.Password.Field").should("exist");
  });
});
