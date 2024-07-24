import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VoiceCommandWhereUniqueInput } from "../voiceCommand/VoiceCommandWhereUniqueInput";

export type ResponseWhereInput = {
  id?: StringFilter;
  responseText?: StringNullableFilter;
  voiceCommand?: VoiceCommandWhereUniqueInput;
};
