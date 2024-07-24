import { Module } from "@nestjs/common";
import { VoiceCommandModuleBase } from "./base/voiceCommand.module.base";
import { VoiceCommandService } from "./voiceCommand.service";
import { VoiceCommandController } from "./voiceCommand.controller";
import { VoiceCommandResolver } from "./voiceCommand.resolver";

@Module({
  imports: [VoiceCommandModuleBase],
  controllers: [VoiceCommandController],
  providers: [VoiceCommandService, VoiceCommandResolver],
  exports: [VoiceCommandService],
})
export class VoiceCommandModule {}
