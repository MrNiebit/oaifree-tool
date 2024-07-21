import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, resp: NextApiResponse) {
    resp.setHeader("Content-Type", "application/json");
    resp.status(200).json({message: "it's ok"})
}