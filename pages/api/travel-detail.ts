import type { NextApiRequest, NextApiResponse } from "next";
import { Mock_Details_All } from "../../mocks";
import { DetailType } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DetailType>
) {
  const { country } = req?.query;
  res.status(200).json(Mock_Details_All[country as string]);
}
