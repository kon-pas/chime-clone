import type { HttpResponseStatus } from "@interfaces";

import type { HttpResponseStatusCode, HttpResponseStatusMessage } from "@types";

import { HTTP } from "@constants";

/**
 * @deprecated Use {@link [HttpResponse](./HttpResponse.ts)} instead.
 */
export default class ErrorResponse {
  public readonly statusCode: HttpResponseStatusCode;
  public readonly statusMessage: HttpResponseStatusMessage;

  constructor(statusCode: HttpResponseStatusCode) {
    this.statusCode = statusCode;
    this.statusMessage = ErrorResponse.codeMessage(this.statusCode);
  }

  static codeMessage(
    statusCode: HttpResponseStatusCode
  ): HttpResponseStatusMessage {
    for (const [_, { code, message }] of Object.entries(HTTP)) {
      if (statusCode === code) return message;
    }

    // @@@ TODO: Get rid of this hard-coded return, although it is
    // never reached as long as `HTTP` contains entries to all
    // corresponding `HttpResponseStatusCode`s
    return "Not Found";
  }

  get status(): HttpResponseStatus {
    return {
      code: this.statusCode,
      message: this.statusMessage,
    };
  }
}
