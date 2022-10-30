import { createContext, useState } from "react";
import type { FC, ReactNode } from "react";
import type { User } from "@interfaces";

type UserSafe = Omit<User, "password">;

export interface UserContextProps {
  user: UserSafe | null;
  setUser: (value: UserSafe | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: FC<UserContextProviderProps> = props => {
  const [user, setUser] = useState<UserSafe | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
