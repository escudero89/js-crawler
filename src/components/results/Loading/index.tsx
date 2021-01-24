import React, { ReactElement } from 'react'
import { Result } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

type LoadingProps = {
  searchFor: string;
}

export default function Loading({ searchFor }: LoadingProps): ReactElement {
  return (
    <Result
      icon={<LoadingOutlined spin />}
      title="Crawling Google!"
      subTitle={(
        <em>
          (looking for
          {' '}
          <strong>{searchFor}</strong>
          )
        </em>
      )}
    />
  )
}
