import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => any;

const handler: handlerSignature = async (req, res) => {
  const { email, password } = req.body;

  const users = await fetch(`${process.env.HOST}/api/database/users`)
    .then(res => res.json());

  console.log(users);

  // res.status(200).json({ name: "John Doe" });
};

export default handler;
