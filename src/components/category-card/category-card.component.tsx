import { Box, Paper, Typography } from "@mui/material";
import { EastOutlined } from "@mui/icons-material";

type CategoryCardProps = {
  Icon: any;
  categoryTitle: string;
  description: string;
  handleClick: () => void;
  "data-testid"?: string;
};

export const CategoryCard = ({
  Icon,
  categoryTitle,
  description,
  handleClick,
  "data-testid": dataTestId,
}: CategoryCardProps) => {
  return (
    <Paper
      variant="outlined"
      square
      data-testid={`CategoryCard.${dataTestId}`}
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 2,
        "&:hover": {
          backgroundColor: "primary.main",
          color: "white",
          cursor: "pointer",
        },
        "&:hover p": {
          backgroundColor: "primary.main",
          color: "white",
        },
        "&:hover svg": {
          backgroundColor: "primary.main",
          color: "white",
        },
      }}
    >
      <Icon color="primary" fontSize="large" sx={{ marginBottom: 4 }} />
      <Typography variant="h5" data-testid={`CategoryCard.${dataTestId}.Title`}>
        {categoryTitle}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography
          variant="body2"
          color="#8f8f8f"
          pr={1}
          data-testid={`CategoryCard.${dataTestId}.Description`}
        >
          {description}
        </Typography>
        <EastOutlined />
      </Box>
    </Paper>
  );
};
