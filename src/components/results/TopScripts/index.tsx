import React, { ReactElement } from 'react'
import { Badge, List } from 'antd'

import ScriptsCollectorContainer from '../../../hooks/unstated/ScriptsCollectorContainer'
import config from '../../../../config/default'

export default function TopScripts(): ReactElement {
  const collection = ScriptsCollectorContainer.useContainer()
  const { scripts } = collection
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={scripts.splice(0, config.parameters.MAX_QUANTITY_OF_LIBRARIES_SHOWN)}
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
