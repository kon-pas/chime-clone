import type { FullUser } from "@interfaces";

import { generateId } from "@utils";

/**
 * Available via `/api/database/users` as JSON
 */
const users: FullUser[] = [
  {
    id: generateId(),
    firstName: "Jan",
    secondName: "Kowalski",
    email: "jan@kowalski.com",
    password: "kowal123",
  },
  {
    id: generateId(),
    firstName: "Jan",
    secondName: "Nowak",
    email: "jan@nowak.com",
    password: "nowak123",
  },
  {
    id: generateId(),
    firstName: "Jan",
    secondName: "Jankowski",
    email: "jan@jankowski.com",
    password: "janek123",
  },
];

export default users;
