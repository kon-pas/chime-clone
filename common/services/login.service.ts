// move to fetch-wrapper

import { Email, Password } from "@types";

const { LOCALHOST } = process.env;

interface LoginValues {
  email: Email;
  password: Password;
}

type loginSignature = (user: LoginValues) => Promise<boolean>;

const login: loginSignature = async user => {
  try {
    const users = await fetch(`/api/users/log-in`
      // method: "GET",
      // headers: { "Content-Type": "application/json; charset=utf8" },
      // body: JSON.stringify({ ...user }),
    ).then(res => res.json());
  } catch (error) {
    console.error(error);
  }

  return true;
};

export default login;
