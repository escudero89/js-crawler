import React, { ReactElement } from 'react'
import { List } from 'antd'
import { LinkOutlined } from '@ant-design/icons'

import ScriptsResolver from './ScriptsResolver'

type SitesContainerProps = {
  sites: string[]
}

export default function SitesContainer({ sites }: SitesContainerProps): ReactElement {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={sites}
        renderItem={(site) => (
          <List.Item
            actions={[
              <a key="open-external-link" href={site} target="_blank" rel="noreferrer noopen">
                open
                {' '}
                <LinkOutlined />
              </a>,
            ]}
          >
            <List.Item.Meta
              title={site}
              description={<ScriptsResolver site={site} />}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
