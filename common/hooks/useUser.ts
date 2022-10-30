import { useContext } from "react";

import UserContext, {
  UserContextProps,
} from "@components/contexts/UserContext";

type useUserSignature = () => [
  UserContextProps["user"],
  UserContextProps["setUser"]
];

const useUser: useUserSignature = () => {
  const { user, setUser } = useContext(UserContext);
  return [user, setUser];
};

export default useUser;
