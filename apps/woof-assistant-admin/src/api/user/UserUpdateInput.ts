import { InputJsonValue } from "../../types";
import { VoiceCommandUpdateManyWithoutUsersInput } from "./VoiceCommandUpdateManyWithoutUsersInput";
import { DeviceUpdateManyWithoutUsersInput } from "./DeviceUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  voiceCommands?: VoiceCommandUpdateManyWithoutUsersInput;
  devices?: DeviceUpdateManyWithoutUsersInput;
};
