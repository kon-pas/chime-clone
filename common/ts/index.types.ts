import type { User } from "@prisma/client";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

// import { ErrorResponse, LoadedResponse } from "@api";

export type HexColor = `#${string}`;

export type Email = `${string}@${string}.${string}`;

export type FirstName = User["firstName"];

export type SecondName = User["secondName"];

export type Password = User["password"];

export type Id = User["id"];

export type HttpResponseStatusCode = 200 | 201 | 404 | 409 | 500;

export type HttpResponseStatusMessage =
  | "OK"
  | "Created"
  | "Not Found"
  | "Conflict"
  | "Internal Server Error";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// @@@ Deprecated.
// export type Response = ErrorResponse | LoadedResponse;
