import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="remainingCheckOut" source="remainingCheckOut" />
        <TextField label="roomStatus" source="roomStatus" />
        <TextField label="totalCheckIn" source="totalCheckIn" />
        <TextField label="totalCheckOut" source="totalCheckOut" />
        <TextField label="totalIncome" source="totalIncome" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vacantRooms" source="vacantRooms" />
      </Datagrid>
    </List>
  );
};
