import { StringFilter } from "../../util/StringFilter";
import { VoiceCommandListRelationFilter } from "../voiceCommand/VoiceCommandListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceWhereInput = {
  id?: StringFilter;
  deviceType?: "Option1";
  voiceCommands?: VoiceCommandListRelationFilter;
  user?: UserWhereUniqueInput;
};
