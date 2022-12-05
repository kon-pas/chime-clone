import type { NextApiRequest, NextApiResponse } from "next";

import { hash, genSalt } from "bcrypt";

import { generateId } from "@utils";
import { HttpResponse, fetchWrapper } from "@utils/api";

const { DB_HOST, DB_AUTH_TOKEN, HASH_SALT_ROUNDS } = process.env;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
): Promise<void> => {
  try {
    const salt = await genSalt(Number(HASH_SALT_ROUNDS));
    const password = await hash(req.body.password, salt);

    const response: HttpResponse = await fetchWrapper
      .put({
        url: `${DB_HOST}/users`,
        body: JSON.stringify({ id: generateId(), ...req.body, password }),
        auth: DB_AUTH_TOKEN,
      })
      .then(res => res.json());

    res
      .status(response.statusCode)
      .send(new HttpResponse(response.statusCode, response.body));
  } catch (error) {
    res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
