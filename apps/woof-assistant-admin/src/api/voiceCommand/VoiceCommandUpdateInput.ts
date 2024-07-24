import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { ResponseUpdateManyWithoutVoiceCommandsInput } from "./ResponseUpdateManyWithoutVoiceCommandsInput";

export type VoiceCommandUpdateInput = {
  commandText?: string | null;
  user?: UserWhereUniqueInput | null;
  device?: DeviceWhereUniqueInput | null;
  responses?: ResponseUpdateManyWithoutVoiceCommandsInput;
};
