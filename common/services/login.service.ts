import { Email, Password } from "@types";

import { fetchWrapper } from "@utils";

interface LoginValues {
  email: Email;
  password: Password;
}

type loginSignature = (user: LoginValues) => Promise<boolean>;

const login: loginSignature = async user => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  try {
    const response = fetchWrapper.post({
      url: `${NEXT_PUBLIC_API_URL}/users/log-in`,
      body: JSON.stringify({ ...user }),
    })

    const userData = await response.then(res => res.json());

    if (userData?.statusCode === 500) return false;

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default login;
