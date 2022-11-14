import type { NextApiRequest, NextApiResponse } from "next";

import { HttpResponse, fetchWrapper } from "@utils/api";
import { generateId } from "@utils";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
) => void;

const { NEXT_PUBLIC_API_URL, DB_AUTH_TOKEN } = process.env;

const handler: handlerSignature = async (req, res) => {
  try {
    const response: HttpResponse = await fetchWrapper
      .put({
        url: `${NEXT_PUBLIC_API_URL}/database/users`,
        body: JSON.stringify({ id: generateId(), ...req.body }),
        auth: DB_AUTH_TOKEN,
      })
      .then(res => res.json());

    res.status(response.statusCode).send(new HttpResponse(response.statusCode));
  } catch (error) {
    res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
