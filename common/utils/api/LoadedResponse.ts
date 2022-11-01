import { ErrorResponse } from "@utils/api";

import { HttpResponseStatusCode } from "@types";

export default class LoadedResponse extends ErrorResponse {
  public readonly body: object;

  constructor(statusCode: HttpResponseStatusCode, body: object) {
    super(statusCode);
    this.body = body;
  }
}
