import { VoiceCommandWhereUniqueInput } from "../voiceCommand/VoiceCommandWhereUniqueInput";

export type ResponseCreateInput = {
  responseText?: string | null;
  voiceCommand?: VoiceCommandWhereUniqueInput | null;
};
