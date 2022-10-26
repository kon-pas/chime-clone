// move to fetch-wrapper

import { User } from "@interfaces";

type loginSignature = (user: User) => Promise<boolean>

const login: loginSignature = async (user) => {
  const res = await fetch("/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user }),
  }).then(res => res.json());

  if (res.error) return false;
  return true;
};

export default login;