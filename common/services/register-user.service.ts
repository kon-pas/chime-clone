import type { RegisterValues } from "@interfaces";

import { fetchWrapper, HttpResponse } from "@api";

const { NEXT_PUBLIC_API_HOST } = process.env;

const registerUser = async (
  registerData: RegisterValues,
  onSuccess?: () => void,
  onFailure?: (msg: string) => void
): Promise<boolean> => {
  try {
    const response: HttpResponse = await fetchWrapper
      .post({
        url: `${NEXT_PUBLIC_API_HOST}/users/sign-up`,
        body: JSON.stringify(registerData),
      })
      .then(res => res.json());

    if (response.success) {
      onSuccess && onSuccess();

      return true;
    } else {
      if (onFailure) {
        const { msg } = response.body as { msg: string };

        onFailure(msg);
      }
      return false;
    }
  } catch (error) {
    onFailure && onFailure("Internal Server Error");

    console.error(error);

    return false;
  }
};

export default registerUser;
