import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deviceType?: SortOrder;
  userId?: SortOrder;
};
