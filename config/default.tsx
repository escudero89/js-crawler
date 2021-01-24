export default {
  parameters: {
    MAX_CRAWLED_URLS_FROM_GOOGLE: 3,
  },
  routes: {
    home: (): string => '/',
    results: (query: string): string => `/results?q=${query}`,
  },
  crawler: {
    google: {
      url: (query:string): string => `https://www.google.com/search?q=${query}`,
      querySelectorAll: '#search a[data-ved][href^="https://"]',
    },
  },
}
