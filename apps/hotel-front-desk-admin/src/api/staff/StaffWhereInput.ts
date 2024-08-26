import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StaffWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: StringNullableFilter;
  username?: StringNullableFilter;
};
