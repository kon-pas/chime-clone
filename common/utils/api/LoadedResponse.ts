import type { HttpResponseStatus } from "@interfaces";

import { ErrorResponse } from "@utils/api";

export default class LoadedResponse extends ErrorResponse {
  private _body: string;

  constructor(status: HttpResponseStatus, body: object) {
    super(status);
    this._body = JSON.stringify(body);
  }

  get body(): object {
    return JSON.parse(this._body);
  }
}