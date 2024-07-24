import { User } from "../user/User";
import { Device } from "../device/Device";
import { Response } from "../response/Response";

export type VoiceCommand = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  commandText: string | null;
  user?: User | null;
  device?: Device | null;
  responses?: Array<Response>;
};
