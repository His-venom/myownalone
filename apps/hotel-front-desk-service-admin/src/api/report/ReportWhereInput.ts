import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ReportWhereInput = {
  id?: StringFilter;
  remainingCheckOut?: IntNullableFilter;
  roomStatus?: StringNullableFilter;
  totalCheckIn?: IntNullableFilter;
  totalCheckOut?: IntNullableFilter;
  totalIncome?: FloatNullableFilter;
  vacantRooms?: IntNullableFilter;
};
