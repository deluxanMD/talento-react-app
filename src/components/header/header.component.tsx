import { Box, Typography } from "@mui/material";
import { SearchJobForm } from "components/forms/search-job-form/search-job-form.component";
import { Headline } from "components/headline/headline.component";

export const Header = () => {
  return (
    <Box p={3} sx={{ backgroundColor: "#f4f4f4" }} data-testid="Header">
      <Headline mt={4} mb={2} />
      <Typography mb={4} color="GrayText" data-testid="Header.Description">
        Great platform for the talent seeker <br /> who seeking to learn new
        talents.
      </Typography>
      <SearchJobForm />
      <Typography mt={2} color="GrayText" data-testid="Header.Popular">
        Popular: UI Design, Javascript
      </Typography>
    </Box>
  );
};
