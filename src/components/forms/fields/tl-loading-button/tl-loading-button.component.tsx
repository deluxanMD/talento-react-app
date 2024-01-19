import { LoadingButton } from "@mui/lab";
import { ButtonProps } from "@mui/material";

type TLLoadingButtonProps = {
  loading?: boolean;
  Icon: any;
} & ButtonProps;

export const TLLoadingButton = ({
  variant,
  children,
  Icon,
  ...rest
}: TLLoadingButtonProps) => {
  return (
    <LoadingButton
      loadingPosition="start"
      startIcon={<Icon />}
      variant={variant}
      data-testid="TLLoadingButton"
      sx={{ borderRadius: 0 }}
      {...rest}
    >
      {children}
    </LoadingButton>
  );
};
