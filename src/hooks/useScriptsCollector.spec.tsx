import { renderHook, act } from '@testing-library/react-hooks'

import useScriptsCollector from './useScriptsCollector'

describe('useScriptsCollector', () => {
  it('should add a list of scripts with the right weight', () => {
    // given
    const listOfScripts = [
      'https://mainplace.com.ar/in/library-one.min.js',
      'https://otherplace.com/this-path/and-this-other/library-two.6.4.5.min.js',
      'https://cdn.example.com/library-three.1.2.3.min.js',
      'https://cdn.example.com/internal-path/library-three.2.3.4.min.js',
      'https://cdn.example.com/library-three.3.4.5.js',
      'https://otherplace.com/library-two.3.4.5.min.js',
    ]

    const { result } = renderHook(() => useScriptsCollector())
    const { addScripts } = result.current // eslint-disable-line @typescript-eslint/no-unused-vars

    // when
    act(() => {
      addScripts(listOfScripts)
    })

    // then
    expect(result.current.scripts.map((scriptElement) => scriptElement.src)).toStrictEqual([
      'https://cdn.example.com/library-three.x.x.x.js',
      'https://otherplace.com/library-two.x.x.x.js',
      'https://mainplace.com.ar/library-one.js',
    ])
  })
})
