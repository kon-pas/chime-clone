import type { NextApiRequest, NextApiResponse } from "next";

import { compare } from "bcrypt";

import type { FullUser } from "@interfaces";

import { HttpResponse, fetchWrapper } from "@utils/api";

const { DB_HOST, DB_AUTH_TOKEN, HASH_SALT_ROUNDS } = process.env;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
): Promise<void> => {
  try {
    const response: HttpResponse = await fetchWrapper
      .get({
        url: `${DB_HOST}/users`,
        auth: DB_AUTH_TOKEN,
      })
      .then(res => res.json());

    if (req.method === "POST") {
      const { email: targetEmail, password: targetPassword } = req.body;

      if (response.success) {
        const users = response.body as FullUser[];

        const foundUser: FullUser | undefined = users.find(
          (user: FullUser) => user.email === targetEmail
        );

        if (foundUser) {
          if (await compare(targetPassword, foundUser.password))
            res.status(200).send(
              new HttpResponse(200, {
                firstName: foundUser.firstName,
                secondName: foundUser.secondName,
                email: foundUser.email,
              })
            );
          else
            res
              .status(404)
              .send(new HttpResponse(404, { msg: "Incorrect Password" }));
        } else
          res
            .status(404)
            .send(new HttpResponse(404, { msg: "User Not Found" }));
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
