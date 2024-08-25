import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const GuestRegistrationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amountPaid" source="amountPaid" />
        <DateTimeInput label="checkIn" source="checkIn" />
        <DateTimeInput label="checkOut" source="checkOut" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="roomNumber" source="roomNumber" />
      </SimpleForm>
    </Create>
  );
};
