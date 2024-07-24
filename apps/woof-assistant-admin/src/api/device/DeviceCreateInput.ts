import { VoiceCommandCreateNestedManyWithoutDevicesInput } from "./VoiceCommandCreateNestedManyWithoutDevicesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceCreateInput = {
  deviceType?: "Option1" | null;
  voiceCommands?: VoiceCommandCreateNestedManyWithoutDevicesInput;
  user?: UserWhereUniqueInput | null;
};
