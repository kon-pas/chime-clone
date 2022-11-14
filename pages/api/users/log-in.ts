import type { NextApiRequest, NextApiResponse } from "next";

import type { FullUser } from "@interfaces";

import { HttpResponse, fetchWrapper } from "@utils/api";

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
) => void;

const { NEXT_PUBLIC_API_URL, DB_AUTH_TOKEN } = process.env;

const handler: handlerSignature = async (req, res) => {
  try {
    const response: HttpResponse = await fetchWrapper
      .get({
        url: `${NEXT_PUBLIC_API_URL}/database/users`,
        auth: DB_AUTH_TOKEN,
      })
      .then(res => res.json());

    if (req.method === "POST") {
      const { email: targetEmail, password: targetPassword } = req.body;

      if (response.success) {
        const users = response.body as FullUser[];

        const targetUser: FullUser | undefined = users.find(
          (user: FullUser) =>
            user.email === targetEmail && user.password === targetPassword
        );

        if (targetUser)
          res.status(200).send(
            new HttpResponse(200, {
              firstName: targetUser.firstName,
              secondName: targetUser.secondName,
              email: targetUser.email,
            })
          );
        else res.status(404).send(new HttpResponse(404));
      } else
        res
          .status(response.statusCode)
          .send(new HttpResponse(response.statusCode));
    }
  } catch (error) {
    res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
