import type { SafeUser } from "@interfaces";
import type { Email } from "@types";

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
};

const session = { user };

export default session;
