import { Work } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";

export const Logo = () => {
  return (
    <Box display="flex" alignItems="center" data-testid="Logo.Container">
      <Avatar sx={{ bgcolor: "primary.main" }}>
        <Work sx={{ color: "common.white" }} />
      </Avatar>
      <Typography
        variant="h4"
        ml={1}
        sx={{
          textTransform: "uppercase",
          color: "primary.main",
        }}
      >
        Talento
      </Typography>
    </Box>
  );
};
