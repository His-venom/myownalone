import { ManagementWhereInput } from "./ManagementWhereInput";
import { ManagementOrderByInput } from "./ManagementOrderByInput";

export type ManagementFindManyArgs = {
  where?: ManagementWhereInput;
  orderBy?: Array<ManagementOrderByInput>;
  skip?: number;
  take?: number;
};
