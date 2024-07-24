import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type DeviceUpdateManyWithoutUsersInput = {
  connect?: Array<DeviceWhereUniqueInput>;
  disconnect?: Array<DeviceWhereUniqueInput>;
  set?: Array<DeviceWhereUniqueInput>;
};
