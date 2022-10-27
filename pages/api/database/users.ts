import type { NextApiRequest, NextApiResponse } from "next";

import { users } from "@database";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ statusCode: 500, statusMessage: "Internal Server Error" });
  }
};

export default handler;
