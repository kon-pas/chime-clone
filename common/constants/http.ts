import type { HttpResponseStatus } from "@interfaces";

const HTTP: { [key: string]: HttpResponseStatus } = {
  STATUS_200: {
    code: 200,
    message: "OK",
  },
  STATUS_201: {
    code: 201,
    message: "Created",
  },
  STATUS_404: {
    code: 404,
    message: "Not Found",
  },
  STATUS_500: {
    code: 500,
    message: "Internal Server Error",
  },
};

export default HTTP;
