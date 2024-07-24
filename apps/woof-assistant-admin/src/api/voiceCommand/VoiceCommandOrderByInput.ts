import { SortOrder } from "../../util/SortOrder";

export type VoiceCommandOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  commandText?: SortOrder;
  userId?: SortOrder;
  deviceId?: SortOrder;
};
