import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TLPasswordFieldProps = {
  name: string;
  "data-testid"?: string;
} & TextFieldProps;

export const TLPasswordField = ({
  name,
  "data-testid": dataTestId = "TLPasswordField",
  ...rest
}: TLPasswordFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          type="password"
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
