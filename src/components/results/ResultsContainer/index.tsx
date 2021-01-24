import React, { ReactElement } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import ServerError from '../../shared/ServerError/index'
import NotFound from '../../shared/NotFound/index'

type ResultsContainerProps = {
  searchFor: string;
}

export default function ResultsContainer({ searchFor }: ResultsContainerProps): ReactElement {
  const { data, error } = useSWR(`/api/crawlGoogle?q=${searchFor}`, axios)

  if (error) {
    return <ServerError />
  }

  if (!data || !data.data) {
    return <NotFound />
  }

  const { data: googleResults } = data

  return (
    <div>
      Results!
      {' '}
      {googleResults}
    </div>
  )
}
