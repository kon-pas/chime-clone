import type { NextApiRequest, NextApiResponse } from "next";

import { users } from "@database";

type handlerSignature = (req: NextApiRequest, res: NextApiResponse) => void;

const handler: handlerSignature = async (req, res) => {
  try {
    if(req.method == "GET")
      res.status(200).send({ ...users });
  } catch (error) {
    console.error(error);
    console.log(2);
    res
      .status(500)
      .send({ statusCode: 500, statusMessage: "Internal Server Error" });
  }
};

export default handler;
