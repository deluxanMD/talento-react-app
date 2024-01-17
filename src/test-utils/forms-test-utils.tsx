import React from "react";
import { FormProvider } from "react-hook-form";
import TLForm from "../components/forms/tl-form/tl-form.component";

type FormWrapperProps = {
  children: React.ReactNode;
  formMethods: any;
};

export const FormWrapper = ({ children, formMethods }: FormWrapperProps) => {
  return (
    <TLForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(() => null)}
      data-testid="TestForm"
    >
      {children}
    </TLForm>
  );
};
