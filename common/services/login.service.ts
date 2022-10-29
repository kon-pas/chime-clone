import { Email, Password } from "@types";

const { NEXT_PUBLIC_API_URL } = process.env;

interface LoginValues {
  email: Email;
  password: Password;
}

type loginSignature = (user: LoginValues) => Promise<boolean>;

const login: loginSignature = async user => {
  try {
    const userData = await fetch(`http://localhost:3000/api/users/log-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf8" },
      body: JSON.stringify({ ...user }),
    }).then(res => res.json());

    console.log(userData);
  } catch (error) {
    console.error(error);
  }

  return true;
};

export default login;
