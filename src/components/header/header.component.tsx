import { Paper, Typography } from "@mui/material";
import { Paper, Typography } from "@mui/material";
import { SearchJobForm } from "components/forms/search-job-form/search-job-form.component";
import { Headline } from "components/headline/headline.component";
import CoverImg from "../../assets/images/model-office-outfit.png";

export const Header = () => {
  return (
    <Paper
      sx={{
        p: 3,
        height: 660,
        borderRadius: 0,
        backgroundImage: `url(${CoverImg})`,
        backgroundSize: "cover",
        backgroundPosition: "30% 25%",
        backgroundRepeat: "no-repeat",
      }}
      data-testid="Header"
    >
      <Headline mt={4} mb={2} />
      <Typography
        sx={{ mt: { md: 24, xs: 12 } }}
        mb={4}
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
    </Paper>
  );
};
