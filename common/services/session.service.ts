import type { SafeUser } from "@interfaces";
import type { Email, FirstName, SecondName } from "@types";

const { setItem, getItem } = sessionStorage;

const user = {
  logIn(user: SafeUser): void {
    setItem("user", JSON.stringify(user));
  },

  logOut(): void {
    setItem("user", "");
  },

  isLogged(): boolean {
    return getItem("user") === null;
  },

  getSafeData(): SafeUser | null {
    const data = getItem("user");
    return data ? JSON.parse(data) : null;
  },

  getEmail(): Email | null {
    const data = getItem("user");
    return data ? JSON.parse(data).email : null;
  },

  getFirstName(): FirstName | null {
    const data = getItem("user");
    return data ? JSON.parse(data).firstName : null;
  },

  getSecondName(): SecondName | null {
    const data = getItem("user");
    return data ? JSON.parse(data).secondName : null;
  },
};

const session = { user };

export default session;
