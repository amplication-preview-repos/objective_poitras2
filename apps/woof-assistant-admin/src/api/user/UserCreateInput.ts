import { InputJsonValue } from "../../types";
import { VoiceCommandCreateNestedManyWithoutUsersInput } from "./VoiceCommandCreateNestedManyWithoutUsersInput";
import { DeviceCreateNestedManyWithoutUsersInput } from "./DeviceCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  voiceCommands?: VoiceCommandCreateNestedManyWithoutUsersInput;
  devices?: DeviceCreateNestedManyWithoutUsersInput;
};
