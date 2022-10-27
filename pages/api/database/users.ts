import type { NextApiRequest, NextApiResponse } from "next";

import { users } from "@database";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  console.log(users);

  res.status(200).json(JSON.stringify([1]));
};

export default handler;
