import { Autocomplete, Box, TextField, TextFieldProps } from "@mui/material";
import { useController } from "react-hook-form";
import { useOnAutocompleteChange } from "./tl-autocomplete-field.hooks";

export type Option = {
  id: string;
  label: string;
};

type TLAutocompleteFieldProps = {
  name: string;
  options: Option[];
  multiple?: boolean;
  label: string;
  "data-testid"?: string;
  ListboxProps?: any;
  Icon?: any;
  isOptionEqualToValue?: (option, value) => boolean;
} & TextFieldProps;

export const TLAutocompleteField = ({
  name,
  options,
  label,
  variant,
  multiple,
  helperText,
  "data-testid": dataTestId = "TLAutocompleteField",
  ListboxProps,
  Icon,
  isOptionEqualToValue = (option, value) => option.id === value.id,
}: TLAutocompleteFieldProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  const onChange = useOnAutocompleteChange(field, multiple);

  return (
    <Autocomplete
      multiple={multiple}
      size="small"
      options={options}
      onChange={onChange}
      data-testid={dataTestId}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={isOptionEqualToValue}
      renderInput={(params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: helperText || !!error ? "center" : "flex-end",
          }}
        >
          {!!Icon && (
            <Icon
              sx={{ color: "primary.main", mr: 1, my: 0.5 }}
              data-testid={`${dataTestId}.Icon`}
            />
          )}
          <TextField
            {...params}
            label={label}
            variant={variant}
            error={!!error}
            helperText={
              <span data-testid={`${dataTestId}.HelperText`}>
                {!!error ? error.message : helperText}
              </span>
            }
          />
        </Box>
      )}
      ListboxProps={{
        "data-testid": `${dataTestId}.Listbox`,
        ...ListboxProps,
      }}
    />
  );
};
