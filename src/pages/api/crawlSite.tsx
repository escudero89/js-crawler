import { NextApiRequest, NextApiResponse } from 'next'

export default function crawlSite(req: NextApiRequest, res:NextApiResponse): void {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
