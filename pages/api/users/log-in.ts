import type { NextApiRequest, NextApiResponse } from "next";

import { HTTP } from "@constants";

import type { HttpStatus, User } from "@interfaces";

const { NEXT_PUBLIC_API_URL } = process.env;

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<User | HttpStatus>
) => void;

const handler: handlerSignature = async (req, res) => {
  try {
    // @@@ Use fetch-wrapper
    const response = fetch(`${NEXT_PUBLIC_API_URL}/database/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=utf8" },
    });

    if (req.method === "POST") {
      const { email: targetEmail, password: targetPassword } = req.body;

      const users = await response.then(res => res.json());

      if (users?.statusCode === 500) res.status(500).send(HTTP.STATUS_500);

      const targetUser = users.find(
        (user: User) =>
          user.email === targetEmail && user.password === targetPassword
      );

      if (targetUser) res.status(200).send(targetUser);
      else res.status(404).send(HTTP.STATUS_404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(HTTP.STATUS_500);
  }
};

export default handler;
