import type { HttpResponseStatus } from "@interfaces";

import type { HttpResponseStatusCode } from "@types";

import { HTTP } from "@constants";

/**
 * Helper class for wrapping HTTP responses.
 *
 * @param statusCode - HTTP message status code
 *
 * @param body - HTTP message body
 *
 * @example
 * Create an instance inside API:
 * ```
 * res.status(200).send(new HttpResponse(200, {foo: 'bar'}));
 * ```
 */
export default class HttpResponse {
  public readonly statusCode: HttpResponseStatusCode;
  public readonly statusMessage: string;
  public readonly success?: boolean;
  public readonly body?: object;

  constructor(statusCode: HttpResponseStatusCode, body?: object) {
    this.statusCode = statusCode;
    this.statusMessage = HttpResponse.codeMessage(this.statusCode);
    this.success = 200 <= this.statusCode && this.statusCode < 300;
    this.body = body;
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
