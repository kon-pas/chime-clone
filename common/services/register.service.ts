import type { Username, Email, Password } from "@types";

import { fetchWrapper, HttpResponse } from "@utils/api";

interface RegisterValues {
  username: Username;
  email: Email;
  password: Password;
}

type loginSignature = (
  loginData: RegisterValues,
  onSuccess?: () => void,
  onFailure?: () => void
) => Promise<boolean>;

const login: loginSignature = async (registerData, onSuccess, onFailure) => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  try {
    const response: HttpResponse = await fetchWrapper
      .post({
        url: `${NEXT_PUBLIC_API_URL}/users/sign-up`,
        body: JSON.stringify(registerData),
      })
      .then(res => res.json());

    if (response.success) {
      onSuccess && onSuccess();
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

export default login;