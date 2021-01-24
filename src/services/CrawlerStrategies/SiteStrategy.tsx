import { Page } from 'puppeteer'
import config from '../../../config/default'

export default async function SiteStrategy(page: Page): Promise<string[]> {
  const scripts = await page.$$eval(
    config.crawler.sites.querySelectorAll,
    (elements: Element[]) => elements.map((script: Element): string => (script as HTMLScriptElement).src),
  )

  return scripts
}
