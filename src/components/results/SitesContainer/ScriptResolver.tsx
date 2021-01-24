import React, { ReactElement, ReactNode, useEffect } from 'react'

import { Tag } from 'antd'
import config from '../../../../config/default'
import ScriptsCollectorContainer from '../../../hooks/unstated/ScriptsCollectorContainer'

const getFormattedScript = (script: string): string => ((script.length > config.parameters.MAX_LENGTH_OF_SCRIPT_SOURCE)
  ? `${script.substr(0, config.parameters.MAX_LENGTH_OF_SCRIPT_SOURCE)}…`
  : script)

type ScriptResolverProps = {
  scripts: string[];
}

export default function ScriptResolver({ scripts }: ScriptResolverProps): ReactElement {
  const collection = ScriptsCollectorContainer.useContainer()

  useEffect(() => {
    collection.addScripts(scripts)
  }, [scripts])

  return (
    <>
      {
      scripts.map((script: string): ReactNode => (
        <Tag color="magenta" key={encodeURIComponent(script)}>
          {getFormattedScript(script)}
        </Tag>
      ))
      }
    </>
  )
}
