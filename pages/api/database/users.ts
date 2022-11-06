import type { NextApiRequest, NextApiResponse } from "next";

import type { FullUser } from "@interfaces";

import { HttpResponse } from "@utils/api";

import { USERS } from "@database";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
) => void;

/**
 * Imitating database.
 */
const handler: handlerSignature = async (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).send(new HttpResponse(200, [...USERS]));
    case "PUT": {
      const { username, email, password } = req.body as FullUser;

      if (
        USERS.some(user => user.username === username || user.email === email)
      ) {
        res.status(500).send(new HttpResponse(500));
      } else {
        USERS.push({ username, email, password });
        res.status(201).send(new HttpResponse(201));
      }
    }
    default:
      res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
