// move to fetch-wrapper

import { User } from "@interfaces";

type loginSignature = (user: User) => Promise<boolean>

const login: loginSignature = async (user) => {
  const res = await fetch("/api/users/log-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user }),
  }).then(res => res.json());

  return res.error;
};

export default login;