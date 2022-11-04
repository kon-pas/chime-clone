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
      .get({
        url: `${NEXT_PUBLIC_API_URL}/database/users`,
      })
      .then(res => res.json());

  } catch (error) {
    res.status(500).send(new HttpResponse(500));
  }
};

export default handler;