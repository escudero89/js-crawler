import React, { ReactElement } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import { Skeleton, Typography } from 'antd'
import ScriptResolver from './ScriptResolver'

const { Text } = Typography

type ScriptsResolverProps = {
  site: string;
}

export default function ScriptsResolver({ site }: ScriptsResolverProps): ReactElement {
  const { data, error } = useSWR(`/api/crawlSite?url=${site}`, axios)

  if (error) {
    return <Text type="danger">Oops, something went wrong.</Text>
  }

  if (!data || !data.data) {
    return <Skeleton active title={false} />
  }

  const { data: scripts } = data

  return <ScriptResolver scripts={scripts} />
}
