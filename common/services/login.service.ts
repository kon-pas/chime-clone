import { Email, Password } from "@types";

const { NEXT_PUBLIC_API_URL } = process.env;

interface LoginValues {
  email: Email;
  password: Password;
}

type loginSignature = (user: LoginValues) => Promise<boolean>;

const login: loginSignature = async user => {
  try {
    const response = fetch(`${NEXT_PUBLIC_API_URL}/users/log-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf8" },
      body: JSON.stringify({ ...user }),
    });

    const userData = await response.then(res => res.json());

    if (userData?.statusCode === 500) return false;

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default login;
