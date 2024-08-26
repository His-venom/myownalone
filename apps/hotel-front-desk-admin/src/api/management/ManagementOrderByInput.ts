import { SortOrder } from "../../util/SortOrder";

export type ManagementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
