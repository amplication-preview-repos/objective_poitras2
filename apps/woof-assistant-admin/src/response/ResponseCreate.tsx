import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VoiceCommandTitle } from "../voiceCommand/VoiceCommandTitle";

export const ResponseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ResponseText" source="responseText" />
        <ReferenceInput
          source="voiceCommand.id"
          reference="VoiceCommand"
          label="VoiceCommand"
        >
          <SelectInput optionText={VoiceCommandTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
