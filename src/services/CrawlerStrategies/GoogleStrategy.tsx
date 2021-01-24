import { Page } from 'puppeteer'
import config from '../../../config/default'
import filterRelevantUrls from './utils/filterRelevantUrls'

export default async function GoogleStrategy(page: Page): Promise<string[]> {
  const urls = await page.$$eval(
    config.crawler.google.querySelectorAll,
    (elements: Element[]) => elements.map((anchor: Element): string => (anchor as HTMLAnchorElement).href),
  )

  return filterRelevantUrls(urls).splice(0, config.parameters.MAX_CRAWLED_URLS_FROM_GOOGLE)
}
