import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="remainingCheckOut"
          source="remainingCheckOut"
        />
        <TextInput label="roomStatus" source="roomStatus" />
        <NumberInput step={1} label="totalCheckIn" source="totalCheckIn" />
        <NumberInput step={1} label="totalCheckOut" source="totalCheckOut" />
        <NumberInput label="totalIncome" source="totalIncome" />
        <NumberInput step={1} label="vacantRooms" source="vacantRooms" />
      </SimpleForm>
    </Create>
  );
};
