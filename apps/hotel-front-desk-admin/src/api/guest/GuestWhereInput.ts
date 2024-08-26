import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GuestWhereInput = {
  amountPaid?: FloatNullableFilter;
  checkIn?: DateTimeNullableFilter;
  checkOut?: DateTimeNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  roomNumber?: IntNullableFilter;
};
