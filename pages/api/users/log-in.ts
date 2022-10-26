import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

type handlerSignature = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => any;

const handler: handlerSignature = (req, res) => {
  console.log(req.body)

  // res.status(200).json({ name: "John Doe" });
};

export default handler;
