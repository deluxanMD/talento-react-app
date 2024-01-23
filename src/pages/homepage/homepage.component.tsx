import { Box, Container, Typography } from "@mui/material";
import { SearchJobForm } from "components/forms/search-job-form/search-job-form.component";
import { Header } from "components/header/header.component";
import { Headline } from "components/headline/headline.component";

export const HomePage = () => {
  return (
    <Container maxWidth="xl" data-testid="HomePage.Container">
      <Header />
    </Container>
  );
};
