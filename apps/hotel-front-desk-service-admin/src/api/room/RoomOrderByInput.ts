import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
