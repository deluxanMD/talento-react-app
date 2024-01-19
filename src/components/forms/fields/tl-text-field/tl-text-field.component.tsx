import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export type TLTextFieldProps = {
  name: string;
  "data-testid"?: string;
} & TextFieldProps;

export const TLTextField = ({
  name,
  "data-testid": dataTestId = "TLTextField",
  ...rest
}: TLTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          size="small"
          data-testid={dataTestId}
          error={!!error}
          helperText={error?.message}
          {...field}
          {...rest}
        />
      )}
    />
  );
};
