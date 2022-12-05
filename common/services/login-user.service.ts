import type { Email, Password } from "@types";

import type { SafeUser } from "@interfaces";

import { fetchWrapper, HttpResponse } from "@utils/api";

interface LoginValues {
  email: Email;
  password: Password;
}

const { NEXT_PUBLIC_API_HOST } = process.env;

const loginUser = async (
  loginData: LoginValues,
  onSuccess: (safeUserData: SafeUser) => void,
  onFailure?: (msg: string) => void
): Promise<boolean> => {
  try {
    const response: HttpResponse = await fetchWrapper
      .post({
        url: `${NEXT_PUBLIC_API_HOST}/users/log-in`,
        body: JSON.stringify(loginData),
      })
      .then(res => res.json());

    if (response.success) {
      const safeUserData = response.body as SafeUser;
      onSuccess(safeUserData);
      return true;
    } else {
      if (onFailure) {
        const { msg } = response.body as { msg: string };
        onFailure(msg);
      }
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default loginUser;
