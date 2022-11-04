import type { Email, Password } from "@types";

import type { SafeUser } from "@interfaces";

import { fetchWrapper, HttpResponse } from "@utils/api";

interface LoginValues {
  email: Email;
  password: Password;
}

type loginSignature = (
  loginData: LoginValues,
  onSuccess: (safeUserData?: SafeUser) => void,
  onFailure?: (safeUserData?: SafeUser) => void
) => Promise<boolean>;

const login: loginSignature = async (loginData, onSuccess, onFailure) => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  try {
    const response: HttpResponse = await fetchWrapper
      .post({
        url: `${NEXT_PUBLIC_API_URL}/users/log-in`,
        body: JSON.stringify(loginData),
      })
      .then(res => res.json());

    const safeUserData = response.body as SafeUser;

    if (response.success) {
      onSuccess(safeUserData);
      return true;
    } else {
      onFailure && onFailure(safeUserData);
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default login;
