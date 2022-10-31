import type { NextApiRequest, NextApiResponse } from "next";

import { fetchWrapper } from "@utils/api";

import { HTTP } from "@constants";

import type { Response } from "@types";

import { ErrorResponse, LoadedResponse } from "@utils/api";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => void;

const handler: handlerSignature = async (req, res) => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  try {
    const response = fetchWrapper.get({
      url: `${NEXT_PUBLIC_API_URL}/database/users`,
    });

    const users = await response.then(res => res.json());

    if (req.method === "POST") {
      const { email: targetEmail, password: targetPassword } = req.body;

      if (users?.statusCode === 500)
        res.status(500).send(new ErrorResponse(500));

      const targetUser = users.find(
        (user: FullUser) =>
          user.email === targetEmail && user.password === targetPassword
      );

      if (targetUser)
        res
          .status(200)
          .send({ username: targetUser.username, email: targetUser.email });
      else res.status(404).send(new ErrorResponse(404));
    }
  } catch (error) {
    res.status(500).send(new ErrorResponse(500));
  }
};

export default handler;
