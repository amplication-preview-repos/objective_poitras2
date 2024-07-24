import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VOICECOMMAND_TITLE_FIELD } from "./VoiceCommandTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { DEVICE_TITLE_FIELD } from "../device/DeviceTitle";

export const VoiceCommandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="CommandText" source="commandText" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Device" source="device.id" reference="Device">
          <TextField source={DEVICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Response"
          target="voiceCommandId"
          label="Responses"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="ResponseText" source="responseText" />
            <ReferenceField
              label="VoiceCommand"
              source="voicecommand.id"
              reference="VoiceCommand"
            >
              <TextField source={VOICECOMMAND_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
