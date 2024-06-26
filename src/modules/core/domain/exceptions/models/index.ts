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


export interface UnexpectedError {
  kind: "UnexpectedError";
  error: Error;
}

export type DataExceptions = UnexpectedError | BadRequest |  Unauthorized