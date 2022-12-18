import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch("https://epda.codeventure.co/api/contestantr/report", { method: "GET", headers: { cdvntr_mobile_version: "37" } });
    res.status(200).send(await response.json());
}
