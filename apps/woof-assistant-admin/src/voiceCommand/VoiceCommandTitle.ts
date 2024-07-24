import { VoiceCommand as TVoiceCommand } from "../api/voiceCommand/VoiceCommand";

export const VOICECOMMAND_TITLE_FIELD = "commandText";

export const VoiceCommandTitle = (record: TVoiceCommand): string => {
  return record.commandText?.toString() || String(record.id);
};
