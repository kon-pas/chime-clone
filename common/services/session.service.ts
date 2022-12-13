import { SafeUser } from "@interfaces";

const user = {
  logIn(user: SafeUser): void {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  },

  logOut(): void {
    window.sessionStorage.setItem("user", "");
  },

  isLogged(): boolean {
    return this.get() === null;
  },

  get(): SafeUser | null {
    const user = window.sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};

const session = { user };

export default session;
