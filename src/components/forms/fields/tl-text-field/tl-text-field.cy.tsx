import React from "react";
import { TLTextField } from "./tl-text-field.component";
import { FormWrapper } from "../../../../test-utils/forms-test-utils";
import { useForm } from "react-hook-form";

const Testcomponent = () => {
  const formMethods = useForm();

  return (
    <FormWrapper formMethods={formMethods}>
      <TLTextField name="testname" />
    </FormWrapper>
  );
};

describe("<TLTextField />", () => {
  it("should load the component", () => {
    cy.mount(<Testcomponent />);
    cy.findByTestId("TLTextField").should("exist");
    cy.findByTestId("TestForm.Button").click();
  });
});
