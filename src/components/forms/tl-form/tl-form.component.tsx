import { DevTool } from "@hookform/devtools";
import { Box, BoxProps } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";

type TLFormProps = {
  children: React.ReactNode;
  formMethods: any;
  "data-testid"?: string;
  devTool?: boolean;
} & BoxProps &
  React.HTMLProps<HTMLFormElement>;

const TLForm = ({
  children,
  formMethods,
  "data-testid": dataTestId = "TLForm",
  devTool,
  ...rest
}: TLFormProps) => {
  return (
    <FormProvider {...formMethods}>
      <Box component="form" data-testid={dataTestId} {...rest}>
        {devTool && <DevTool control={formMethods.control} />}
        {children}
      </Box>
    </FormProvider>
  );
};

export default TLForm;
