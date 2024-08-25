import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "roomStatus";

export const ReportTitle = (record: TReport): string => {
  return record.roomStatus?.toString() || String(record.id);
};
