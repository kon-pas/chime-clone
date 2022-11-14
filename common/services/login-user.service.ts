import type { Email, Password } from "@types";

import type { SafeUser } from "@interfaces";

import { fetchWrapper, HttpResponse } from "@utils/api";

interface LoginValues {
  email: Email;
  password: Password;
}

type loginUserSignature = (
  loginData: LoginValues,
  onSuccess: (safeUserData?: SafeUser) => void,
  onFailure?: () => void
) => Promise<boolean>;

const { NEXT_PUBLIC_API_URL } = process.env;

const loginUser: loginUserSignature = async (
  loginData,
  onSuccess,
  onFailure
) => {
  try {
    const response: HttpResponse = await fetchWrapper
      .post({
        url: `${NEXT_PUBLIC_API_URL}/users/log-in`,
        body: JSON.stringify(loginData),
      })
      .then(res => res.json());

    if (response.success) {
      const safeUserData = response.body as SafeUser;
      onSuccess(safeUserData);
      return true;
    } else {
      onFailure && onFailure();
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default loginUser;
