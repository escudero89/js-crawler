import React, { ReactElement } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import ServerError from '../../shared/ServerError/index'
import Loading from '../../shared/Loading/index'
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

  if (!data || !data.data) {
    return <Loading />
  }

  const { data: googleResults } = data

  return (
    <ScriptsCollectorContainer.Provider>
      <TopScripts />
      <SitesContainer sites={googleResults} />
    </ScriptsCollectorContainer.Provider>
  )
}
