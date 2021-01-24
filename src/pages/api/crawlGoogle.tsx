import { NextApiRequest, NextApiResponse } from 'next'
import CrawlerService from '../../services/CrawlerService'
import config from '../../../config/default'
import GoogleStrategy from '../../services/CrawlerStrategies/GoogleStrategy'

export default async function crawlGoogle(req: NextApiRequest, res:NextApiResponse): Promise<any> {
  if (req.method !== 'GET') {
    return res.status(404).send('Not Found')
  }

  if (!req.query.q || typeof req.query.q !== 'string') {
    return res.status(400).send('Bad Request')
  }

  const crawler = new CrawlerService()
  const results = await crawler
    .setUrl(config.crawler.google.url(decodeURIComponent(req.query.q)))
    .setStrategy(GoogleStrategy)
    .crawl()

  return res.status(200).json(results)
}
