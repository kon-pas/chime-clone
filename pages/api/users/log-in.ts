import type { NextApiRequest, NextApiResponse } from "next";

import type { Response } from "@types";

import type { FullUser } from "@interfaces";

import { ErrorResponse, LoadedResponse, fetchWrapper } from "@utils/api";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => void;

const handler: handlerSignature = async (req, res) => {
  const { NEXT_PUBLIC_API_URL } = process.env;

  try {
    const response: Response = await fetchWrapper
      .get({
        url: `${NEXT_PUBLIC_API_URL}/database/users`,
      })
      .then(res => res.json());

    if (req.method === "POST") {
      const { email: targetEmail, password: targetPassword } = JSON.parse(
        req.body
      );

      if (response instanceof LoadedResponse) {
        const { body } = response as any;

        const targetUser: FullUser | undefined = body.find(
          (user: FullUser) =>
            user.email === targetEmail && user.password === targetPassword
        );

        if (targetUser)
          res.status(200).send(
            new LoadedResponse(200, {
              username: targetUser.username,
              email: targetUser.email,
            })
          );
        else res.status(404).send(new ErrorResponse(404));
      } else if (response instanceof ErrorResponse) {
        res.status(500).send(new ErrorResponse(500));
      }
    }
  } catch (error) {
    res.status(500).send(new ErrorResponse(500));
  }
};

export default handler;
