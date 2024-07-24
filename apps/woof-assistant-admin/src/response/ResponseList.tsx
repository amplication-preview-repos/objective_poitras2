import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VOICECOMMAND_TITLE_FIELD } from "../voiceCommand/VoiceCommandTitle";

export const ResponseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Responses"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
