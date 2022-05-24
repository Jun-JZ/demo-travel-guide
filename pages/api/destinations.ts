import type { NextApiRequest, NextApiResponse } from "next";
import { Mock_Destinations_All } from "../../mocks";
import { DestinationsType } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DestinationsType>
) {
  const { area } = req?.query;

  // Return mock data
  res.status(200).json(Mock_Destinations_All[area as string] || []);
}
