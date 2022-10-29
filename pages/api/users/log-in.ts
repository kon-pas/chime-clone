import type { NextApiRequest, NextApiResponse } from "next";

import { fetchWrapper } from "@utils";

import { HTTP } from "@constants";

import type { HttpStatus, User } from "@interfaces";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<Omit<User, "password"> | HttpStatus>
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
        (user: User) =>
          user.email === targetEmail && user.password === targetPassword
      );

      if (targetUser)
        res
          .status(200)
          .send({ username: targetUser.username, email: targetUser.email });
      else res.status(404).send(HTTP.STATUS_404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(HTTP.STATUS_500);
  }
};

export default handler;
