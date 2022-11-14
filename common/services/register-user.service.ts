import type { FirstName, SecondName, Email, Password } from "@types";

import { fetchWrapper, HttpResponse } from "@utils/api";

interface RegisterValues {
  firstName: FirstName;
  secondName: SecondName;
  email: Email;
  password: Password;
}

type registerUserSignature = (
  loginData: RegisterValues,
  onSuccess?: () => void,
  onFailure?: () => void
) => Promise<boolean>;

const { NEXT_PUBLIC_API_URL } = process.env;

const registerUser: registerUserSignature = async (
  registerData,
  onSuccess,
  onFailure
) => {
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

export default registerUser;
