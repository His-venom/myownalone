import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="remainingCheckOut" source="remainingCheckOut" />
        <TextField label="roomStatus" source="roomStatus" />
        <TextField label="totalCheckIn" source="totalCheckIn" />
        <TextField label="totalCheckOut" source="totalCheckOut" />
        <TextField label="totalIncome" source="totalIncome" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vacantRooms" source="vacantRooms" />
      </SimpleShowLayout>
    </Show>
  );
};
