// move to fetch-wrapper

import { User } from "@interfaces";

const login = async (user: User) => {
  const res = await fetch("/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({...user})
  }).then(res => res.json());

  
}