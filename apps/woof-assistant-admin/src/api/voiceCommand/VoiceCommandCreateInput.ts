import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { ResponseCreateNestedManyWithoutVoiceCommandsInput } from "./ResponseCreateNestedManyWithoutVoiceCommandsInput";

export type VoiceCommandCreateInput = {
  commandText?: string | null;
  user?: UserWhereUniqueInput | null;
  device?: DeviceWhereUniqueInput | null;
  responses?: ResponseCreateNestedManyWithoutVoiceCommandsInput;
};
