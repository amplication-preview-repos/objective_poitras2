import * as graphql from "@nestjs/graphql";
import { VoiceCommandResolverBase } from "./base/voiceCommand.resolver.base";
import { VoiceCommand } from "./base/VoiceCommand";
import { VoiceCommandService } from "./voiceCommand.service";

@graphql.Resolver(() => VoiceCommand)
export class VoiceCommandResolver extends VoiceCommandResolverBase {
  constructor(protected readonly service: VoiceCommandService) {
    super(service);
  }
}
