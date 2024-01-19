import { Autocomplete, TextField, TextFieldProps } from "@mui/material";
import { useController } from "react-hook-form";
import { useOnAutocompleteChange } from "./tl-autocomplete-field.hooks";

export type Option = {
  id: string;
  label: string;
};

type TLAutocompleteField = {
  name: string;
  options: Option[];
  multiple?: boolean;
  label: string;
  "data-testid"?: string;
  ListboxProps?: any;
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
  isOptionEqualToValue = (option, value) => option.id === value.id,
}: TLAutocompleteField) => {
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
        <TextField
          {...params}
          label={label}
          variant={variant}
          error={!!error}
          helperText={!!error ? error.message : helperText}
        />
      )}
      ListboxProps={{
        "data-testid": `${dataTestId}.Listbox`,
        ...ListboxProps,
      }}
    />
  );
};
