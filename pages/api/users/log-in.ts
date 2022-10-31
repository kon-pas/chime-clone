import type { NextApiRequest, NextApiResponse } from "next";

import { fetchWrapper } from "@utils/api";

import { HTTP } from "@constants";

import type { HttpResponseStatus, FullUser } from "@interfaces";
import type { SafeUser } from "@types";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<SafeUser | HttpResponseStatus>
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

      if (users?.statusCode === 500) res.status(500).send(HTTP.STATUS_500);

      const targetUser = users.find(
        (user: FullUser) =>
          user.email === targetEmail && user.password === targetPassword
      );

      if (targetUser)
        res
          .status(200)
          .send({ username: targetUser.username, email: targetUser.email });
      else res.status(404).send(HTTP.STATUS_404);
    }
  } catch (error) {
    res.status(500).send(HTTP.STATUS_500);
  }
};

export default handler;
