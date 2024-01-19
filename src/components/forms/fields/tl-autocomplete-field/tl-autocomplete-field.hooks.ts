import { useCallback, useMemo } from "react";

export const useOnAutocompleteChange = (field, multiple) =>
  useCallback(
    (_e, option, reason) => {
      if (multiple) {
        field.onChange(option.map((option) => option?.id ?? option));
      } else {
        if (reason === "clear") field.onChange("");
        else field.onChange(option.id);
      }
    },
    [field, multiple]
  );
