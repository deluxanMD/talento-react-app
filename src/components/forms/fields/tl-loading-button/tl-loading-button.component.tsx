import { LoadingButton } from "@mui/lab";
import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

type TLLoadingButtonProps = {
  loading?: boolean;
} & ButtonProps;

export const TLLoadingButton = ({
  variant,
  children,
  ...rest
}: TLLoadingButtonProps) => {
  return (
    <LoadingButton
      loadingPosition="start"
      variant={variant}
      data-testid="TLLoadingButton"
      sx={{ borderRadius: 0 }}
      {...rest}
    >
      {children}
    </LoadingButton>
  );
};
