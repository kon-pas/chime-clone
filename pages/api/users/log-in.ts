import type { NextApiRequest, NextApiResponse } from "next";

import https from "https";

import type { HttpStatus, User } from "@interfaces";

const { LOCALHOST } = process.env;

type Data = User[];

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<Data | HttpStatus>
) => void;

const handler: handlerSignature = async (req, res) => {
  const { email, password } = req.body;
  try {
    // @@@ Use fetch-wrapper

    // const users = await fetch("/api/database/users").then(res =>
    //   res.json()
    // );

    const users = await fetch(`${LOCALHOST}/api/database/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=utf8" },
    }).then(res => res.json());

    // @@@ handle errors
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    console.log(2);
    res
      .status(500)
      .send({ statusCode: 500, statusMessage: "Internal Server Error" });
  }
};

export default handler;
