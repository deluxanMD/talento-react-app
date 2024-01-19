import React from "react";
import { TLTextField } from "./tl-text-field.component";
import { FormWrapper } from "../../../../test-utils/forms-test-utils";
import { useForm } from "react-hook-form";
import { AccountCircle } from "@mui/icons-material";

const TestComponent = ({
  dataTestId,
  Icon,
}: {
  dataTestId?: string;
  Icon?: any;
}) => {
  const formMethods = useForm();

  return (
    <FormWrapper formMethods={formMethods}>
      <TLTextField name="testname" data-testid={dataTestId} Icon={Icon} />
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

  it("should load with Icon", () => {
    cy.mount(<TestComponent Icon={AccountCircle} />);
    cy.findByTestId("TLTextField.Icon").should("exist");
  });
});
