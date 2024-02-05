import { Box, BoxProps, Divider, Typography, useTheme } from "@mui/material";

export const Headline = ({ ...rest }: BoxProps) => {
  const theme = useTheme();

  return (
    <Box {...rest} data-testid="Headline">
      <Typography variant="h4" color="primary">
        Discover
      </Typography>
      <Typography variant="h4" color="primary">
        more than
      </Typography>
      <Typography variant="h4" color="secondary">
        5000<sup style={{ fontSize: 24 }}>+</sup> talents
      </Typography>
      <Divider
        sx={{
          marginTop: 1,
          width: 210,
          height: 5,
          backgroundColor: theme.palette.secondary.main,
        }}
      />
    </Box>
  );
};
