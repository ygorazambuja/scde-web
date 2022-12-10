import { NextApiRequest, NextApiResponse } from "next";
import { searchByName } from "../../../database/searchByName";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;

  if (!req.query.name) {
    res.status(400).json({ error: "Missing name on request body" });
  }

  if (method === "GET") {
    const studentsWithNameContains = searchByName(req.query.name as string);

    res.status(200).json(studentsWithNameContains);
  }
}
