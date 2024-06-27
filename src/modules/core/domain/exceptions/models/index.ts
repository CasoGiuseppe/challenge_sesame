import type { UnprocessableContent } from "@modules/core/guards/exceptions/UnprocessableContent";
import type { BadApiRequest } from "@modules/core/guards/exceptions/BadApiRequest";
import type { UnauthorizedRequest } from "@modules/core/guards/exceptions/UnauthorizedRequest";

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

export interface UnprocessableRequest {
  kind: "UnprocessableRequest";
  error: UnprocessableContent;
}

export type DataExceptions = UnexpectedError | BadRequest |  Unauthorized | UnprocessableRequest