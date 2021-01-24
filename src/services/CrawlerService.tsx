import { Page } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

type CrawlerStrategy = (page: Page) => Promise<string[]>

export default class CrawlerService {
  url: string | null = null

  strategy: CrawlerStrategy | null = null

  setUrl(url: string): CrawlerService {
    this.url = url
    return this
  }

  setStrategy(strategy: CrawlerStrategy): CrawlerService {
    this.strategy = strategy
    return this
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
