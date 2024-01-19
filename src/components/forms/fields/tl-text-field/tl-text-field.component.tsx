import React from "react";
import { Box, TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export type TLTextFieldProps = {
  name: string;
  Icon?: any;
  "data-testid"?: string;
} & TextFieldProps;

export const TLTextField = ({
  name,
  Icon,
  "data-testid": dataTestId = "TLTextField",
  ...rest
}: TLTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          {!!Icon && (
            <Icon
              sx={{ color: "primary.main", mr: 1, my: 0.5 }}
              data-testid={`${dataTestId}.Icon`}
            />
          )}
          <TextField
            fullWidth
            size="small"
            data-testid={dataTestId}
            error={!!error}
            helperText={error?.message}
            {...field}
            {...rest}
          />
        </Box>
      )}
    />
  );
};
