import { VoiceCommand } from "../voiceCommand/VoiceCommand";

export type Response = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  responseText: string | null;
  voiceCommand?: VoiceCommand | null;
};
