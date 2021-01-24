import React, { ReactElement, ReactNode } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import { Skeleton, Tag, Typography } from 'antd'
import config from '../../../../config/default'

const { Text } = Typography

const getFormattedScript = (script: string): string => ((script.length > config.parameters.MAX_LENGTH_OF_SCRIPT_SOURCE)
  ? `${script.substr(0, config.parameters.MAX_LENGTH_OF_SCRIPT_SOURCE)}…`
  : script)

type ScriptResolverProps = {
  site: string;
}

export default function ScriptResolver({ site }: ScriptResolverProps): ReactElement {
  const { data, error } = useSWR(`/api/crawlSite?url=${site}`, axios)

  if (error) {
    return <Text type="danger">Oops, something went wrong.</Text>
  }

  if (!data || !data.data) {
    return <Skeleton active title={false} />
  }

  const { data: scripts } = data

  return (
    scripts.map((script: string): ReactNode => (
      <Tag color="magenta" key={`${site}-${script}`}>
        {getFormattedScript(script)}
      </Tag>
    ))
  )
}
