import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { VOICECOMMAND_TITLE_FIELD } from "../voiceCommand/VoiceCommandTitle";

export const ResponseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
