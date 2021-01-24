import { useState } from 'react'
import ScriptElement from './utils/ScriptElement'

type ScriptsCollectorProps = {
  scripts: ScriptElement[];
  addScript: (src:string)=>void;
  addScripts: (src:string[])=>void;
}

export default function useScriptsCollector(): ScriptsCollectorProps {
  const [scripts, setScripts] = useState<ScriptElement[]>([])

  const addScript = (src: string) => {
    setScripts((prevScripts: ScriptElement[]): ScriptElement[] => {
      let newScripts = [...prevScripts]

      const added = newScripts.some((script: ScriptElement): boolean => {
        if (script.is(src)) {
          script.increaseWeight()
          return true
        }
        return false
      })

      if (!added) {
        newScripts = [...newScripts, new ScriptElement(src)]
      }

      return [...newScripts].sort((a, b) => b.weight - a.weight) // sort from heaviest to lighter
    })
  }

  const addScripts = (sources: string[]) => {
    sources.forEach((src: string) => addScript(src))
  }

  return {
    scripts,
    addScript,
    addScripts,
  }
}
