import type { NextApiRequest, NextApiResponse } from "next";

import type { Response } from "@types";

import { ErrorResponse, LoadedResponse } from "@utils/api";

import { USERS } from "@database";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => void;

const handler: handlerSignature = async (req, res) => {
  try {
    if (req.method === "GET")
      res.status(200).send(new LoadedResponse(200, [...USERS]));
  } catch (error) {
    res.status(500).send(new ErrorResponse(500));
  }
};

export default handler;
