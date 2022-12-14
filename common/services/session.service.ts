import type { SafeUser } from "@interfaces";
import type { Email, FirstName, SecondName } from "@types";

const user = {
  logIn(user: SafeUser): void {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  },

  logOut(): void {
    window.sessionStorage.setItem("user", "");
  },

  isLogged(): boolean {
    return window.sessionStorage.getItem("user") === null;
  },

  getSafeData(): SafeUser | null {
    const data = window.sessionStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  },

  getEmail(): Email | null {
    const data = window.sessionStorage.getItem("user");
    return data ? JSON.parse(data).email : null;
  },

  getFirstName(): FirstName | null {
    const data = window.sessionStorage.getItem("user");
    return data ? JSON.parse(data).firstName : null;
  },

  getSecondName(): SecondName | null {
    const data = window.sessionStorage.getItem("user");
    return data ? JSON.parse(data).secondName : null;
  },
};

const session = { user };

export default session;
 