import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";

export type VoiceCommandWhereInput = {
  id?: StringFilter;
  commandText?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  device?: DeviceWhereUniqueInput;
  responses?: ResponseListRelationFilter;
};
