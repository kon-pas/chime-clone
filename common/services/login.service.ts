import type { Email, Password, SafeUser } from "@types";

import type { HttpStatus } from "@interfaces";

import { fetchWrapper } from "@utils/api";

interface LoginValues {
  email: Email;
  password: Password;
}

type loginSignature = (user: LoginValues) => Promise<SafeUser | Error>;

const login: loginSignature = async user => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  const isHttpStatus = (obj: object): obj is HttpStatus => "statusCode" in obj;

  try {
    const response: Promise<Response> = fetchWrapper.post({
      url: `${NEXT_PUBLIC_API_URL}/users/log-in`,
      body: JSON.stringify({ ...user }),
    });

    const userData: SafeUser | HttpStatus = await response.then(res =>
      res.json()
    );

    if (isHttpStatus(userData)) throw new Error(userData.statusMessage);
    else return userData;
  } catch (error) {
    throw new Error("foo"); // @@@
  }
};

export default login;
