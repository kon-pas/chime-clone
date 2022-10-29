import type { HttpStatus } from "@interfaces";

const HTTP: { [key: string]: HttpStatus } = {
  STATUS_404: {
    statusCode: 404,
    statusMessage: "Not Found",
  },
  STATUS_500: {
    statusCode: 500,
    statusMessage: "Internal Server Error",
  },
};

export default HTTP;
