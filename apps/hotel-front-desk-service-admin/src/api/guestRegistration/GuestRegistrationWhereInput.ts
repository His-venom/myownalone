import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GuestRegistrationWhereInput = {
  amountPaid?: FloatNullableFilter;
  checkIn?: DateTimeNullableFilter;
  checkOut?: DateTimeNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  roomNumber?: StringNullableFilter;
};
