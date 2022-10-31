import type { HttpResponseStatus } from "@interfaces";

import type { HttpResponseStatusCode } from "@types";

import { HTTP } from "@constants";

export default class ErrorResponse {
  public readonly statusCode: HttpResponseStatusCode;

  constructor(statusCode: HttpResponseStatusCode) {
    this.statusCode = statusCode;
  }

  get statusMessage(): string {
    for (const [_, { code, message }] of Object.entries(HTTP)) {
      if (this.statusCode === code) return message;
    }

    // @@@ TODO: Get rid of this hard-coded return, although it is
    // never reached as long as `HTTP` contains objects to all
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
