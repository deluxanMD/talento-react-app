import * as yup from "yup";

export const searchJobSchema = yup.object().shape({
  keyword: yup.string().required("Please provide a search keyword"),
  country: yup.string().required("I hope you belong to this earth ;-)"),
});
