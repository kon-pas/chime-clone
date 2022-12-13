import { SafeUser } from "@interfaces";

// interface User {
//   save(user: SafeUser): void;
// }

// interface Session {
//   user(): User;
// }

// const session: Session = () => {
//   user() {
//     save(user) {
//       window.sessionStorage.setItem("user", JSON.stringify(user));
//     }
//   }
// }

const user = {
  set(user: SafeUser): void {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  },
};

const session = { user };

export default session;
