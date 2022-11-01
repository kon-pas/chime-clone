import type { Email, Password, Response } from "@types";

// import type { HttpResponseStatus, SafeUser } from "@interfaces";

import { fetchWrapper, ErrorResponse, LoadedResponse } from "@utils/api";

interface LoginValues {
  email: Email;
  password: Password;
}

type loginSignature = (user: LoginValues) => Promise<Response>;

const login: loginSignature = async user => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  try {
    const response: Response = await fetchWrapper
      .post({
        url: `${NEXT_PUBLIC_API_URL}/users/log-in`,
        body: JSON.stringify({ ...user }),
      })
      .then(res => res.json());

    if (response instanceof LoadedResponse)
      return new LoadedResponse(200, response.body);
    else if (response instanceof ErrorResponse) {
      switch (response.statusCode) {
        case 404:
          return new ErrorResponse(404);
        case 500:
        default:
          return new ErrorResponse(500);
      }
    }
  } catch (error) {
    return new ErrorResponse(500);
  }
};

export default login;
