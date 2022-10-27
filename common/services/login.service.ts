// move to fetch-wrapper

import { Email, Password } from "@types";

interface LoginValues {
  email: Email;
  password: Password;
}

type loginSignature = (user: LoginValues) => Promise<boolean>

const login: loginSignature = async (user) => {
  const res = await fetch("/api/users/log-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user }),
  }).then(res => res.json());

  return res.error;
};

export default login;