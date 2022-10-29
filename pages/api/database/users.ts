import type { NextApiRequest, NextApiResponse } from "next";

import type { HttpStatus, User } from "@interfaces";

import { HTTP } from "@constants";

import { users } from "@database";

type Data = HttpStatus | User[];

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => void;

const handler: handlerSignature = async (req, res) => {
  try {
    if (req.method === "GET") res.status(200).send([...users]);
  } catch (error) {
    console.error(error);
    res.status(500).send(HTTP.STATUS_500);
  }
};

export default handler;
