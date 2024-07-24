import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VoiceCommandListRelationFilter } from "../voiceCommand/VoiceCommandListRelationFilter";
import { DeviceListRelationFilter } from "../device/DeviceListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  voiceCommands?: VoiceCommandListRelationFilter;
  devices?: DeviceListRelationFilter;
};
