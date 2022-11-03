import { ErrorResponse, LoadedResponse } from "@utils/api";

export type HexColor = `#${string}`;

export type Email = `${string}@${string}.${string}`;

export type Username = string;

export type Password = string;

export type HttpResponseStatusCode = 
| 200
| 404
| 500

/**
 * Deprecated.
 * @see `@utils/api/HttpResponse`
 */
export type Response = ErrorResponse | LoadedResponse;
