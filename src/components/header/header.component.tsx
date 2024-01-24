import { Box, Typography } from "@mui/material";
import { SearchJobForm } from "components/forms/search-job-form/search-job-form.component";
import { Headline } from "components/headline/headline.component";

export const Header = () => {
  const imageURL =
    "https://cdn.create.vista.com/api/media/medium/132339176/stock-photo-happy-beautiful-young-woman-showing-way-with-fingers?token=";

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 0,
        width: "100%",
        height: "580px",
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      data-testid="Header"
    >
      <Headline mt={4} mb={2} />
      <Typography
        mt={4}
        mb={6}
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
    </Box>
  );
};
