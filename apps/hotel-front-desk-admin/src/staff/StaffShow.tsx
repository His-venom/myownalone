import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const StaffShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="password" />
        <TextField label="role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
