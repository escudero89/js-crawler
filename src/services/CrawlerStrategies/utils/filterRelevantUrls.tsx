/**
 * @param url A string with a URL format
 * @return The hostname from that URL, or null
 */
function getHostName(url: string): string | null {
  try {
    return (new URL(url)).hostname
  } catch (e) {
    return null
  }
}

/**
 * Remove duplicated without sorting, and bases it duplicates on
 * those that share the same domain.
 * @param urls A list of urls to filter
 */
export default function filterRelevantUrls(urls: string[]): string[] {
  return urls.reduce((accumulator: string[], url: string): string[] => {
    const hostname = getHostName(url)

    if (!hostname) { return accumulator }

    const wasFiltered = accumulator.some((filteredUrl): boolean => (filteredUrl.indexOf(hostname) !== -1))

    if (!wasFiltered) {
      accumulator.push(url)
    }

    return accumulator
  }, [])
}
