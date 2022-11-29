import type { NextApiRequest, NextApiResponse } from "next";

import type { FullUser } from "@interfaces";

import { HttpResponse } from "@utils/api";

import { USERS } from "@database";

const { DB_AUTH_TOKEN } = process.env;

/**
 * Imitating database.
 */
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
): Promise<void> => {
  const authToken = req.headers.authorization as string;

  const authTokenTrimmed: string | undefined =
    authToken && req.headers.authorization?.slice(7);

  if (authTokenTrimmed === DB_AUTH_TOKEN) {
    switch (req.method) {
      case "GET": {
        res.status(200).send(new HttpResponse(200, [...USERS]));
        break;
      }

      case "PUT": {
        const { firstName, secondName, email, password, id } =
          req.body as FullUser;

        if (USERS.some(user => user.email === email)) {
          res.status(500).send(new HttpResponse(500));
        } else {
          USERS.push({ firstName, secondName, email, password, id });
          res.status(201).send(new HttpResponse(201));
        }

        break;
      }

      default: {
        res.status(500).send(new HttpResponse(500));
        break;
      }
    }
  } else res.status(500).send(new HttpResponse(500));
};

export default handler;
