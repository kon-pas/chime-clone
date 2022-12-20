import { ErrorResponse } from "@api";

import { HttpResponseStatusCode } from "@types";

/**
 * @deprecated Use {@link [HttpResponse](./HttpResponse.ts)} instead.
 */
export default class LoadedResponse extends ErrorResponse {
  public readonly body: object;

  constructor(statusCode: HttpResponseStatusCode, body: object) {
    super(statusCode);
    this.body = body;
  }
}
