import { VoiceCommand } from "../voiceCommand/VoiceCommand";
import { User } from "../user/User";

export type Device = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deviceType?: "Option1" | null;
  voiceCommands?: Array<VoiceCommand>;
  user?: User | null;
};
