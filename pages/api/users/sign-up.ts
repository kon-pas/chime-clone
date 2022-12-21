import type { NextApiRequest, NextApiResponse } from "next";

import { hash, genSalt } from "bcrypt";
import { generateId } from "@utils";
import { HttpResponse } from "@api";
import { prisma } from "@lib";

const { HASH_SALT_ROUNDS } = process.env;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<HttpResponse>
): Promise<void> => {
  try {
    const salt = await genSalt(Number(HASH_SALT_ROUNDS));
    const password = await hash(req.body.password, salt);
    const foundUser = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (foundUser)
      res.status(409).send(
        new HttpResponse(409, {
          msg: "Email Address Has Already Been Taken",
        })
      );
    else {
      await prisma.user.create({
        data: {
          id: generateId(),
          ...req.body,
          password,
        },
      });
      res.status(201).send(new HttpResponse(201));
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(new HttpResponse(500));
  }
};

export default handler;
