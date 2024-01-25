import { Paper, Typography } from "@mui/material";
import { SearchJobForm } from "components/forms/search-job-form/search-job-form.component";
import { Headline } from "components/headline/headline.component";
import CoverImg from "../../assets/images/model-office-outfit2.png";

export const Header = () => {
  return (
    <Paper
      sx={{
        p: 3,
        height: 600,
        borderRadius: 0,
        backgroundImage: `url(${CoverImg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "1100px",
        backgroundRepeat: "no-repeat",
      }}
      data-testid="Header"
    >
      <Headline mt={4} mb={2} />
      <Typography
        mt={10}
        mb={10}
        color="GrayText"
        data-testid="Header.Description"
      >
        Great platform for the talent seeker <br /> who seeking to learn new
        talents.
      </Typography>
      <SearchJobForm />
      <Typography mt={2} color="GrayText" data-testid="Header.Popular">
        Popular: UI Design, Javascript
      </Typography>
    </Paper>
  );
};
