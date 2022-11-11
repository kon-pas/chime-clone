import type { FullUser } from "@interfaces";

/**
 * Available via `/api/database/users` as JSON
 */
const users: FullUser[] = [
  {
    firstName: "Jan",
    secondName: "Kowalski",
    email: "jan@kowalski.com",
    password: "kowal123",
  },
  {
    firstName: "Jan",
    secondName: "Nowak",
    email: "jan@nowak.com",
    password: "nowak123",
  },
  {
    firstName: "Jan",
    secondName: "Jankowski",
    email: "jan@jankowski.com",
    password: "janek123",
  },
];

export default users;
