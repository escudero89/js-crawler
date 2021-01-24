import React, { ReactElement } from 'react'
import { Badge, List } from 'antd'

import ScriptsCollectorContainer from '../../../hooks/unstated/ScriptsCollectorContainer'

export default function TopScripts(): ReactElement {
  const collection = ScriptsCollectorContainer.useContainer()
  const { scripts } = collection
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={scripts}
        renderItem={(script) => (
          <List.Item extra={<Badge count={script.weight} />}>
            <List.Item.Meta
              key={script.src}
              title={script.src}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
