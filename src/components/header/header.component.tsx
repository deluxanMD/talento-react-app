import { Paper, Typography } from "@mui/material";
import { SearchJobForm } from "components/forms/search-job-form/search-job-form.component";
import { Headline } from "components/headline/headline.component";
import CoverImg from "../../assets/images/model-office-outfit.png";

export const Header = () => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 0,
        width: "100%",
        height: "580px",
        backgroundImage: `url(${CoverImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      data-testid="Header"
    >
      <Headline mt={4} mb={2} />
      <Typography mt={4} mb={6} data-testid="Header.Description">
        Great platform for the talent seeker <br /> who seeking to learn new
        talents.
      </Typography>
      <SearchJobForm />
      <Typography mt={2} data-testid="Header.Popular">
        Popular: UI Design, Javascript
      </Typography>
    </Paper>
  );
};
