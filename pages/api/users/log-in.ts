import type { NextApiRequest, NextApiResponse } from "next";
import type { FullUser } from "@interfaces";

import { compare } from "bcrypt";
import { HttpResponse } from "@api";
import { prisma } from "@lib";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
): Promise<void> => {
  switch (req.method) {
    case "POST": {
      try {
        const { email: targetEmail, password: targetPassword } = req.body;

        const foundUser: FullUser | null = await prisma.user.findUnique({
          where: {
            email: targetEmail,
          },
        });

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
        } else {
          res
            .status(404)
            .send(new HttpResponse(404, { msg: "User Not Found" }));
        }
      } catch {
        res.status(500).send(new HttpResponse(500));
      } finally {
        break;
      }
    }
    default: {
      res.status(500).send(new HttpResponse(500));
      break;
    }
  }
};

export default handler;
