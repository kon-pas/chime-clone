import type { HttpResponseStatus } from "@interfaces";



export  class Response {
  status: HttpResponseStatus;
  body?: string;

  constructor(status: HttpResponseStatus, body: string) {
    this.status = status;
    this.body = body;
  }
}