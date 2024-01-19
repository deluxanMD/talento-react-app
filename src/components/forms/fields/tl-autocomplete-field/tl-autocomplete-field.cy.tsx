import { useForm } from "react-hook-form";
import { Option, TLAutocompleteField } from "./tl-autocomplete-field.component";
import { FormWrapper } from "test-utils/forms-test-utils";

const options: Option[] = [
  { id: "one", label: "One" },
  { id: "two", label: "Two" },
];

const TestComponent = ({
  dataTestId,
  ...rest
}: {
  dataTestId?: string;
  multiple?: boolean;
}) => {
  const form = useForm();
  const testVal = form.watch("test");

  return (
    <FormWrapper formMethods={form}>
      <TLAutocompleteField
        name="test"
        label="Test Label"
        options={options}
        data-testid={dataTestId}
        {...rest}
      />
      <div data-testid="testValue">{JSON.stringify(testVal)}</div>
    </FormWrapper>
  );
};

describe("<TLAutocompleteField />", () => {
  it("should load the component", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("TLAutocompleteField").should("exist");
  });

  it("should load with custom test id", () => {
    cy.mount(<TestComponent dataTestId="Test.Autocomplete.Field" />);
    cy.findByTestId("Test.Autocomplete.Field").should("exist");
  });

  it("should handle multiple values", () => {
    cy.mount(<TestComponent multiple />);
    cy.findByTestId("TLAutocompleteField").click();
    cy.findByTestId("TLAutocompleteField.Listbox").should("exist");
    cy.findByTestId("TLAutocompleteField.Listbox")
      .findByRole("option")
      .should("have.length", 2);
    cy.findByTestId("TLAutocompleteField.Listbox")
      .findByRole("option")
      .eq(0)
      .click();
    cy.findByTestId("TLAutocompleteField").click();
    cy.findByTestId("TLAutocompleteField.Listbox")
      .findByRole("option")
      .eq(1)
      .click();
    cy.findByTestId("testValue").should("contain.text", "one");
    cy.findByTestId("testValue").should("contain.text", "two");
  });

  it("should clear the values", () => {
    cy.mount(<TestComponent multiple />);
    cy.findByTestId("TLAutocompleteField").click();
    cy.findByTestId("TLAutocompleteField.Listbox")
      .findByRole("option")
      .eq(0)
      .click();
    cy.findByTestId("CloseIcon").click();
    cy.findByTestId("testValue").should("have.text", "[]");
  });
});
