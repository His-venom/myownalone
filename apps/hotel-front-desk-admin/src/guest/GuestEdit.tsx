import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const GuestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amountPaid" source="amountPaid" />
        <DateTimeInput label="checkIn" source="checkIn" />
        <DateTimeInput label="checkOut" source="checkOut" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <NumberInput step={1} label="roomNumber" source="roomNumber" />
      </SimpleForm>
    </Edit>
  );
};
