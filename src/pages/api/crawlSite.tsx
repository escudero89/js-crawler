import { NextApiRequest, NextApiResponse } from 'next'
import CrawlerService from '../../services/CrawlerService'
import SiteStrategy from '../../services/CrawlerStrategies/SiteStrategy'

export default async function crawlGoogle(req: NextApiRequest, res:NextApiResponse): Promise<any> {
  if (req.method !== 'GET') {
    return res.status(404).send('Not Found')
  }

  const url = decodeURIComponent(req.query.url as string)

  if (!url || typeof url !== 'string') {
    return res.status(400).send('Bad Request')
  }

  const crawler = new CrawlerService()
  const results = await crawler
    .setUrl(url)
    .setStrategy(SiteStrategy)
    .crawl()

  return res.status(200).json(results)
}
