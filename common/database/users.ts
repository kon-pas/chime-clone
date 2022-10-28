import type { User } from "@interfaces"

/**
 * Available via `/api/database/users` as JSON
 */
const users: User[] = [
  {
    username: "Jan_Kowalski",
    email: "jan@kowalski.com",
    password: "kowal123",
  },
];

export default users;
