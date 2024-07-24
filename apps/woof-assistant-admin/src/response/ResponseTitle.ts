import { Response as TResponse } from "../api/response/Response";

export const RESPONSE_TITLE_FIELD = "responseText";

export const ResponseTitle = (record: TResponse): string => {
  return record.responseText?.toString() || String(record.id);
};
