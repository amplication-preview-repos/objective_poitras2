import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VoiceCommandTitle } from "../voiceCommand/VoiceCommandTitle";

export const ResponseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
