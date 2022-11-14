import type { NextApiRequest, NextApiResponse } from "next";

import { hash, genSalt } from "bcrypt";

import { generateId } from "@utils";
import { HttpResponse, fetchWrapper } from "@utils/api";

const { NEXT_PUBLIC_API_URL, DB_AUTH_TOKEN, HASH_BASE_SALT } = process.env;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
): Promise<void> => {
  try {
    const salt = await genSalt(Number(HASH_BASE_SALT));
    const password = await hash(req.body.password, salt);

    const response: HttpResponse = await fetchWrapper
      .put({
        url: `${NEXT_PUBLIC_API_URL}/database/users`,
        body: JSON.stringify({ id: generateId(), ...req.body, password }),
        auth: DB_AUTH_TOKEN,
      })
      .then(res => res.json());

    res.status(response.statusCode).send(new HttpResponse(response.statusCode));
  } catch (error) {
    res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
