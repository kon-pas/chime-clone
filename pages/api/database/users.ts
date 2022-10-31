import type { NextApiRequest, NextApiResponse } from "next";

import type { HttpResponseStatus, FullUser } from "@interfaces";

import { HTTP } from "@constants";

import { users } from "@database";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponseStatus | FullUser[]>
) => void;

const handler: handlerSignature = async (req, res) => {
  try {
    if (req.method === "GET") res.status(200).send([...users]);
  } catch (error) {
    res.status(500).send(HTTP.STATUS_500);
  }
};

export default handler;
