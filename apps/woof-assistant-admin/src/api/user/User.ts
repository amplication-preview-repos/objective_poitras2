import { JsonValue } from "type-fest";
import { VoiceCommand } from "../voiceCommand/VoiceCommand";
import { Device } from "../device/Device";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  voiceCommands?: Array<VoiceCommand>;
  devices?: Array<Device>;
};
