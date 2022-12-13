import { useContext } from "react";

import UserContext, {
  UserContextProps,
} from "@components/contexts/UserContext";

const useUser: () => UserContextProps = () => useContext(UserContext);

export default useUser;
