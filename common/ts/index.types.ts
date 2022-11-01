import { ErrorResponse, LoadedResponse } from "@utils/api";

export type HexColor = `#${string}`;

export type Email = `${string}@${string}.${string}`;

export type Username = string;

export type Password = string;

export type Response = ErrorResponse | LoadedResponse;

export type HttpResponseStatusCode = 
  | 200
  | 404
  | 500