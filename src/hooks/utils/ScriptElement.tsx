function flattenSemVer(src: string): string {
  return src.replace(/([-./])\d+\.\d+.\d+([-./])/, '$1x.x.x$2')
}

function removeInternalPathAndParams(src: string): string {
  try {
    const url = new URL(src)
    return url.origin + url.pathname.substr(url.pathname.lastIndexOf('/'))
  } catch {
    return src
  }
}

function removeMinVersion(src: string): string {
  return src.replace('.min.js', '.js')
}

export default class ScriptElement {
  src = ''

  original = ''

  weight = 0

  constructor(src: string) {
    this.original = src
    this.src = ScriptElement.format(src)
    this.increaseWeight()
  }

  is(srcForComparison: string): boolean {
    return this.src === ScriptElement.format(srcForComparison)
  }

  increaseWeight(): void {
    this.weight += 1
  }

  static format(src: string): string {
    return removeInternalPathAndParams(flattenSemVer(removeMinVersion(src)))
  }
}
