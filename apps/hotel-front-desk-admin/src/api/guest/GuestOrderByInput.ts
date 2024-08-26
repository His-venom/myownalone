import { SortOrder } from "../../util/SortOrder";

export type GuestOrderByInput = {
  amountPaid?: SortOrder;
  checkIn?: SortOrder;
  checkOut?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  roomNumber?: SortOrder;
  updatedAt?: SortOrder;
};
