import { VoiceCommandUpdateManyWithoutDevicesInput } from "./VoiceCommandUpdateManyWithoutDevicesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceUpdateInput = {
  deviceType?: "Option1" | null;
  voiceCommands?: VoiceCommandUpdateManyWithoutDevicesInput;
  user?: UserWhereUniqueInput | null;
};
