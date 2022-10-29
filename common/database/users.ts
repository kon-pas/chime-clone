import type { User } from "@interfaces";

/**
 * Available via `/api/database/users` as JSON
 */
const users: User[] = [
  {
    username: "Jan_Kowalski",
    email: "jan@kowalski.com",
    password: "kowal123",
  },
  {
    username: "Jan_Nowak",
    email: "jan@nowak.com",
    password: "nowak123",
  },
  {
    username: "Jan_Jankowski",
    email: "jan@jankowski.com",
    password: "janek123",
  },
];

export default users;
