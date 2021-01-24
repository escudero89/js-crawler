export default {
  routes: {
    home: (): string => '/',
    results: (query: string): string => `/results?q=${query}`,
  },
}
