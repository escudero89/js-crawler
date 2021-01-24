import { Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

type CrawlerStrategy = (page: Page) => Promise<string[]>

export default class CrawlerService {
  url: string

  strategy: CrawlerStrategy

  setUrl(url: string): void {
    this.url = url
  }

  setStrategy(strategy: CrawlerStrategy): void {
    this.strategy = strategy
  }

  async crawl(): Promise<string[]> {
    if (!this.url) { throw new Error('A URL for crawling must be set') }
    if (!this.strategy) { throw new Error('An strategy for crawling must be set') }

    puppeteer.use(StealthPlugin())
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(this.url)
    const results = await this.strategy(page)
    await browser.close()
    return results
  }
}
