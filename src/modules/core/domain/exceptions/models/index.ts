import type { BadApiRequest } from "@/modules/core/presentation/exceptions/BadApiRequest";

export interface BadRequest {
  kind: "BadRequest";
  error: BadApiRequest;
}

export interface NotFound {
  kind: "NotFound";
  error: Error;
}

export interface ServerError {
  kind: "ServerError";
  error: ServerError;
}

export interface UnexpectedError {
  kind: "UnexpectedError";
  error: Error;
}

export type DataExceptions = UnexpectedError | BadRequest | NotFound | ServerError 