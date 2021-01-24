import filterRelevantUrls from './filterRelevantUrls'

describe('filterRelevantUrls', () => {
  it('should remove duplicated domains without sorting', () => {
    // given
    const urls = [
      'https://mysite.com/some-page',
      'https://thisothersite.de/at-this-location',
      'an-invalid-url',
      'https://mysite.com/another-page-same-site',
      'https://stremingservice.com',
      'https://thisothersite.de/once-again-repeated',
    ]

    // when
    const filteredUrls = filterRelevantUrls(urls)

    // then
    expect(filteredUrls).toStrictEqual([
      'https://mysite.com/some-page',
      'https://thisothersite.de/at-this-location',
      'https://stremingservice.com',
    ])
  })
})
