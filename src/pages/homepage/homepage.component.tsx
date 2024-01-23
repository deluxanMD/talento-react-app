import { Container } from "@mui/material";
import { Header } from "components/header/header.component";

export const HomePage = () => {
  return (
    <Container maxWidth="xl" data-testid="HomePage.Container">
      <Header />
    </Container>
  );
};
