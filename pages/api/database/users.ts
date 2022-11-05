import type { NextApiRequest, NextApiResponse } from "next";

import { HttpResponse } from "@utils/api";

import { USERS } from "@database";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
) => void;

/**
 * Imitating `users` document in database.
 */
const handler: handlerSignature = async (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).send(new HttpResponse(200, [...USERS]));
    case "PUT":
      USERS.push(req.body);
      res.status(201).send(new HttpResponse(201));
    default:
      res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
