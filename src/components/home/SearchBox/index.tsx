import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import {
  Image,
  Input,
  Row,
  Col,
  Typography,
} from 'antd'

import config from '../../../../config/default'

const { Search } = Input
const { Title } = Typography

export default function SearchBox(): ReactElement {
  const responsiveDimensions = {
    xs: { span: 24 },
    md: {
      span: 12,
      offset: 6,
    },
    lg: {
      span: 8,
      offset: 8,
    },
  }

  const router = useRouter()

  const onSearch = (query: string): void => {
    router.push(config.routes.results(encodeURIComponent(query)))
  }

  return (
    <div style={{ margin: '4rem 0', textAlign: 'center' }}>
      <Row>
        <Col xs={responsiveDimensions.xs} md={responsiveDimensions.md} lg={responsiveDimensions.lg}>
          <Image src="/spider.png" preview={false} />
          <Title>js-crawler</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={responsiveDimensions.xs} md={responsiveDimensions.md} lg={responsiveDimensions.lg}>
          <Search
            placeholder="search javascript files over google"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
      </Row>
    </div>
  )
}
