import { useForm } from "react-hook-form";
import TLForm from "./tl-form.component";

const Testcomponent = () => {
  const form = useForm();

  return (
    <TLForm formMethods={form}>
      <input />
    </TLForm>
  );
};

describe("<TLForm />", () => {
  it("should load the form", () => {
    cy.mount(<Testcomponent />);
    cy.findByTestId("TLForm").should("exist");
  });
});
