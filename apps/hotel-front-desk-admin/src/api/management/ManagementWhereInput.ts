import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ManagementWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: StringNullableFilter;
  username?: StringNullableFilter;
};
