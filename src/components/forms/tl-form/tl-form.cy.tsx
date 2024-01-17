import { useForm } from "react-hook-form";
import TLForm from "./tl-form.component";

const Testcomponent = ({ devTool = false }) => {
  const form = useForm();

  return (
    <TLForm formMethods={form} devTool={devTool}>
      <input />
    </TLForm>
  );
};

describe("<TLForm />", () => {
  it("should load the form", () => {
    cy.mount(<Testcomponent />);
    cy.findByTestId("TLForm").should("exist");
  });

  it("should load dev tools", () => {
    cy.mount(<Testcomponent devTool={true} />);
    cy.get('button[title="Show dev panel"]').should("exist");
  });
});
