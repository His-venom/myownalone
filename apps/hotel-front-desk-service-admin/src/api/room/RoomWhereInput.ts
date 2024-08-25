import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  numberField?: StringNullableFilter;
  status?: "Option1";
};
