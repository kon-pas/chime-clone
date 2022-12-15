import { createContext, useState } from "react";

import type { FC, ReactNode } from "react";
import type { SafeUser } from "@interfaces";

export interface UserContextProps {
  user: SafeUser | null;
  setUser: (value: SafeUser | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

/**
 * @deprecated Context is not provided. Use `useUser` hook instead.
 * @see `@hooks/use-user`
 */
export const UserContextProvider: FC<UserContextProviderProps> = props => {
  const [user, setUser] = useState<SafeUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
