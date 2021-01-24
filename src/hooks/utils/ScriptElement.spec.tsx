import ScriptElement from './ScriptElement'

describe('ScriptElement', () => {
  it('should accumulate into the same script element based on internal path', () => {
    // when
    const scriptA = new ScriptElement('https://cdn.example.com/internal-path/with-even-more/some-code.1.2.3.js')
    const scriptB = new ScriptElement('https://cdn.example.com/some-code.2.3.4.min.js')

    // then
    expect(scriptA.src).toBe(scriptB.src)
  })

  it('should accumulate into the same script even with query params', () => {
    // when
    const scriptA = new ScriptElement('https://cdn.example.com/some-code.1.2.3.min.js?query=params#fragment-even')
    const scriptB = new ScriptElement('https://cdn.example.com/some-code.2.3.4.min.js')

    // then
    expect(scriptA.src).toBe(scriptB.src)
  })
})
