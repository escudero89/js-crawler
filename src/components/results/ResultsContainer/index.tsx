import React, { ReactElement } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import { Card, Col, Row } from 'antd'

import ServerError from '../../shared/ServerError/index'
import Loading from '../Loading/index'
import TopScripts from '../TopScripts/index'
import SitesContainer from '../SitesContainer/index'

import ScriptsCollectorContainer from '../../../hooks/unstated/ScriptsCollectorContainer'

type ResultsContainerProps = {
  searchFor: string;
}

export default function ResultsContainer({ searchFor }: ResultsContainerProps): ReactElement {
  const { data, error } = useSWR(`/api/crawlGoogle?q=${searchFor}`, axios)

  if (error) {
    return <ServerError />
  }

  if (!data) {
    return <Loading searchFor={searchFor} />
  }

  const { data: googleResults } = data

  return (
    <ScriptsCollectorContainer.Provider>
      <Row style={{ padding: '1rem 0' }}>
        <Col span={24}>
          <Card title="TOP Scripts">
            <TopScripts />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card title="Selected pages from crawling">
            <SitesContainer sites={googleResults} />
          </Card>
        </Col>
      </Row>
    </ScriptsCollectorContainer.Provider>
  )
}
