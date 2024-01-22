import { Button, ButtonProps } from "@mui/material";

export const TLButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button {...rest} sx={{ borderRadius: 0 }}>
      {children}
    </Button>
  );
};
