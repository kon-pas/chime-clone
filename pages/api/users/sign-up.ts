import type { NextApiRequest, NextApiResponse } from "next";

import { HttpResponse, fetchWrapper } from "@utils/api";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
) => void;

const handler: handlerSignature = async (req, res) => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  try {
    const response: HttpResponse = await fetchWrapper
      .put({
        url: `${NEXT_PUBLIC_API_URL}/database/users`,
        body: JSON.stringify(req.body),
      })
      .then(res => res.json());

    res.status(response.statusCode).send(new HttpResponse(response.statusCode));
  } catch (error) {
    res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
