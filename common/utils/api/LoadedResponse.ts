import { ErrorResponse } from "@utils/api";

import { HttpResponseStatusCode } from "@types";

export default class LoadedResponse extends ErrorResponse {
  private _body: string;

  constructor(statusCode: HttpResponseStatusCode, body: object) {
    super(statusCode);
    this._body = JSON.stringify(body);
  }

  get body(): object {
    return JSON.parse(this._body);
  }
}