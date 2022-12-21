import type { NextApiRequest, NextApiResponse } from "next";
import type { FullUser } from "@interfaces";

import { compare } from "bcrypt";
import { HttpResponse } from "@api";
import { prisma } from "@lib";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
): Promise<void> => {

  try {
    const users: FullUser[] = await prisma.user.findMany({});

    if (req.method === "POST") {
      const { email: targetEmail, password: targetPassword } = req.body;

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
        res.status(404).send(new HttpResponse(404, { msg: "User Not Found" }));
    }
  } catch (error) {
    res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
