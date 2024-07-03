import type { UnprocessableContent } from "@modules/core/guards/exceptions/UnprocessableContent";
import type { BadApiRequest } from "@modules/core/guards/exceptions/BadApiRequest";
import type { UnauthorizedRequest } from "@modules/core/guards/exceptions/UnauthorizedRequest";
import type { WrongPathRequest } from "@modules/core/guards/exceptions/WrongPathRequest";
import type { UnexpectedError as UnexpectedErrorRequest } from "@modules/core/guards/exceptions/UnexpectedError";

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
  error: UnexpectedErrorRequest;
}

export interface UnprocessableRequest {
  kind: "UnprocessableRequest";
  error: UnprocessableContent;
}

export interface WrongPath {
  kind: "WrongPathRequest";
  error: WrongPathRequest;
}

export type DataExceptions = UnexpectedError | BadRequest |  Unauthorized | UnprocessableRequest | WrongPath