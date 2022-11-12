import { ErrorResponse, LoadedResponse } from "@utils/api";

export type HexColor = `#${string}`;

export type Email = `${string}@${string}.${string}`;

export type FirstName = string;

export type SecondName = string;

export type Password = string;

export type HttpResponseStatusCode = 200 | 201 | 404 | 500;

export type HttpResponseStatusMessage =
  | "OK"
  | "Created"
  | "Not Found"
  | "Internal Server Error";

/**
 * Deprecated.
 * @see `@utils/api/HttpResponse`
 */
export type Response = ErrorResponse | LoadedResponse;
