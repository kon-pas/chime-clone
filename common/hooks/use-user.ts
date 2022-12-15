import type { SafeUser } from "@interfaces";

import { useState, useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";

const useUser = (): {
  user: SafeUser | null;
  setUser: (user: SafeUser | null) => void;
} => {
  const [user, setUser] = useSessionStorage<SafeUser | null>("user", null);
  return { user, setUser };
};

export default useUser;
