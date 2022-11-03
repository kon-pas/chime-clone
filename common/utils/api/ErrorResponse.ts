import type { HttpResponseStatus } from "@interfaces";

import type { HttpResponseStatusCode } from "@types";

import { HTTP } from "@constants";

export default class ErrorResponse {
  public readonly statusCode: HttpResponseStatusCode;
  public readonly statusMessage: string;

  constructor(statusCode: HttpResponseStatusCode) {
    this.statusCode = statusCode;
    this.statusMessage = ErrorResponse.codeMessage(this.statusCode);
  }

  static codeMessage(statusCode: HttpResponseStatusCode): string {
    for (const [_, { code, message }] of Object.entries(HTTP)) {
      if (statusCode === code) return message;
    }

    // @@@ TODO: Get rid of this hard-coded return, although it is
    // never reached as long as `HTTP` contains entries to all
    // corresponding `HttpResponseStatusCode`s
    return "Wrong code";
  }

  get status(): HttpResponseStatus {
    return {
      code: this.statusCode,
      message: this.statusMessage,
    };
  }
}
