import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { searchJobSchema } from "./search-job-form.schema";

export const useSearchJobForm = () => {
  return useForm({
    resolver: yupResolver(searchJobSchema),
  });
};
