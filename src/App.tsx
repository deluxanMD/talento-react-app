import { Box, Container, useTheme } from "@mui/material";
import { TLAppbar } from "components/tl-appbar/tl-appbar.component";
import MainRoutes from "helpers/router/main-routes";

function App() {
  const theme = useTheme();

  return (
    <Box px={{ md: 20 }}>
      <TLAppbar />
      <MainRoutes />
    </Box>
  );
}

export default App;
