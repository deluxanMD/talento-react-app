import React from "react";
import { TLTextField } from "./tl-text-field.component";
import { FormWrapper } from "../../../../test-utils/forms-test-utils";
import { useForm } from "react-hook-form";

const TestComponent = ({ dataTestId }: { dataTestId?: string }) => {
  const formMethods = useForm();

  return (
    <FormWrapper formMethods={formMethods}>
      <TLTextField name="testname" data-testid={dataTestId} />
    </FormWrapper>
  );
};

describe("<TLTextField />", () => {
  it("should load the component", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("TLTextField").should("exist");
    cy.findByTestId("TestForm.Button").click();
  });

  it("should load with custom test id", () => {
    cy.mount(<TestComponent dataTestId="Test.Text.Field" />);
    cy.findByTestId("Test.Text.Field").should("exist");
  });
});
