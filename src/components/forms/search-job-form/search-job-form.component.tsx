import { Grid, Paper } from "@mui/material";
import { TLAutocompleteField } from "../fields/tl-autocomplete-field/tl-autocomplete-field.component";
import { TLTextField } from "../fields/tl-text-field/tl-text-field.component";
import { FmdGoodOutlined, SearchRounded } from "@mui/icons-material";
import TLForm from "../tl-form/tl-form.component";
import { useSearchJobForm } from "./search-job-form.hooks";
import { countries } from "constants/countries";
import { TLLoadingButton } from "../fields/tl-loading-button/tl-loading-button.component";

export const SearchJobForm = () => {
  const form = useSearchJobForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Paper
      elevation={4}
      data-testid="SearchJobForm.Container"
      sx={{ borderRadius: 0 }}
    >
      <TLForm formMethods={form} data-testid="SearchJobForm">
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "white",
            padding: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={5}>
            <TLTextField
              name="keyword"
              label="Job Title"
              variant="standard"
              Icon={SearchRounded}
              data-testid="SearchJobForm.Keyword"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TLAutocompleteField
              name="country"
              label="Country"
              options={countries}
              variant="standard"
              Icon={FmdGoodOutlined}
              data-testid="SearchJobForm.Country"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TLLoadingButton
              variant="contained"
              type="submit"
              loading={false}
              Icon={SearchRounded}
              fullWidth
              onClick={form.handleSubmit(submit)}
            >
              Search
            </TLLoadingButton>
          </Grid>
        </Grid>
      </TLForm>
    </Paper>
  );
};
