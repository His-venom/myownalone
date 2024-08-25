import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  remainingCheckOut?: SortOrder;
  roomStatus?: SortOrder;
  totalCheckIn?: SortOrder;
  totalCheckOut?: SortOrder;
  totalIncome?: SortOrder;
  updatedAt?: SortOrder;
  vacantRooms?: SortOrder;
};
