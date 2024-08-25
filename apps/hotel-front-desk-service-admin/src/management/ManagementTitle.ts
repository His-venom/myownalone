import { Management as TManagement } from "../api/management/Management";

export const MANAGEMENT_TITLE_FIELD = "username";

export const ManagementTitle = (record: TManagement): string => {
  return record.username?.toString() || String(record.id);
};
