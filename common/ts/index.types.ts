// import { ErrorResponse, LoadedResponse } from "@utils/api";

export type HexColor = `#${string}`;

export type Email = `${string}@${string}.${string}`;

export type FirstName = string;

export type SecondName = string;

export type Password = string;

export type Id = string;

export type HttpResponseStatusCode = 200 | 201 | 404 | 409 | 500;

export type HttpResponseStatusMessage =
  | "OK"
  | "Created"
  | "Not Found"
  | "Conflict"
  | "Internal Server Error";

// @@@ Deprecated.
// export type Response = ErrorResponse | LoadedResponse;
