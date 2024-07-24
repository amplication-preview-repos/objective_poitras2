import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoiceCommandService } from "./voiceCommand.service";
import { VoiceCommandControllerBase } from "./base/voiceCommand.controller.base";

@swagger.ApiTags("voiceCommands")
@common.Controller("voiceCommands")
export class VoiceCommandController extends VoiceCommandControllerBase {
  constructor(protected readonly service: VoiceCommandService) {
    super(service);
  }
}
