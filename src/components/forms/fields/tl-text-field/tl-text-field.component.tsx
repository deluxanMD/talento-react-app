import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TLTextFieldProps = {
  name: string;
} & TextFieldProps;

const TLTextField = ({ name, ...rest }: TLTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          size="small"
          data-testid="TLTextField"
          error={!!error}
          helperText={error?.message}
          {...field}
          {...rest}
        />
      )}
    />
  );
};

export default TLTextField;
