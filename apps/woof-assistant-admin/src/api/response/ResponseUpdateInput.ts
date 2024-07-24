import { VoiceCommandWhereUniqueInput } from "../voiceCommand/VoiceCommandWhereUniqueInput";

export type ResponseUpdateInput = {
  responseText?: string | null;
  voiceCommand?: VoiceCommandWhereUniqueInput | null;
};
