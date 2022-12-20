import type { FullUser } from "@interfaces";

import { generateId } from "@utils";

/**
 * Available via `/api/database/users` as JSON
 */
const users: FullUser[] = [
  {
    id: generateId(),
    firstName: "John",
    secondName: "Doe",
    email: "john@doe.com",
    // @@@ Hashed "doe123"
    password: "$2b$10$IkP2AUvw8GY6Wu6yl1PlSOU/9DrUraYRFN/FlkpAJTmofqZLVU.US",
  },
  {
    id: generateId(),
    firstName: "Jane",
    secondName: "Doe",
    email: "jane@doe.com",
    // @@@ Hashed "doe123"
    password: "$2b$10$HexkU7UDaHlqOV6LB/Oek.Ipt4vCrhTJbVQasmo2BxvhwedVHPyT6",
  },
  {
    id: generateId(),
    firstName: "Jan",
    secondName: "Kowalski",
    email: "jan@kowalski.com",
    // @@@ Hashed "kowal123"
    password: "$2b$10$OKuxdzGueg4rmIQXWzLDKej1Csi9ZamrIDVGovOEYEBkTnPOyknEi",
  },
  {
    id: generateId(),
    firstName: "Jan",
    secondName: "Nowak",
    email: "jan@nowak.com",
    // @@@ Hashed "nowak123"
    password: "$2b$10$QB1XUAHk0E31PBk8mzKymuB/OV8KsfIldp.tNqkF6DkW.1Y9zlBSm",
  },
  {
    id: generateId(),
    firstName: "Jan",
    secondName: "Jankowski",
    email: "jan@jankowski.com",
    // @@@ Hashed "janek123"
    password: "$2b$10$MF8DtZFx2OkKrEJis7zN6etrC6TpsoUcsoFZeQVulDm3dFPNYs9eW",
  },
  {
    id: generateId(),
    firstName: "dsa",
    secondName: "dsa",
    email: "dsa@dsa.dsa",
    // @@@ Hashed "dsadsa"
    password: "$2b$10$3z6W.Fm8QamjeHYdZ/RLAOfrRVg.TQq/ux5e9Mirr3XGWhp3.6sIK",
  },
];

export default users;
