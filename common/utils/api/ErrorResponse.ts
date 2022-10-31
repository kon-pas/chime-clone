import type { HttpResponseStatus } from "@interfaces";

export default class ErrorResponse {
  public readonly status: HttpResponseStatus;

  constructor(status: HttpResponseStatus) {
    this.status = status;
  }
}
