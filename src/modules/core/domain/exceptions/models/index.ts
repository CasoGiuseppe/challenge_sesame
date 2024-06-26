import type { BadApiRequest } from "@modules/core/data/exceptions/BadApiRequest";
import type { UnauthorizedRequest } from "@modules/core/data/exceptions/UnauthorizedRequest";

export interface BadRequest {
  kind: "BadRequest";
  error: BadApiRequest;
}

export interface Unauthorized {
  kind: "Unauthorized";
  error: UnauthorizedRequest;
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

export type DataExceptions = UnexpectedError | BadRequest | NotFound | ServerError | Unauthorized