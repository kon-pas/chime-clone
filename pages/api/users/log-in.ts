import type { NextApiRequest, NextApiResponse } from "next";

import { hash, genSalt } from "bcrypt";

import type { FullUser } from "@interfaces";

import { HttpResponse, fetchWrapper } from "@utils/api";

const { NEXT_PUBLIC_API_URL, DB_AUTH_TOKEN, HASH_BASE_SALT } = process.env;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
): Promise<void> => {
  try {
    const response: HttpResponse = await fetchWrapper
      .get({
        url: `${NEXT_PUBLIC_API_URL}/database/users`,
        auth: DB_AUTH_TOKEN,
      })
      .then(res => res.json());

    if (req.method === "POST") {
      const { email: targetEmail, password } = req.body;
      const salt = await genSalt(Number(HASH_BASE_SALT));
      const targetPassword = await hash(password, salt);

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
