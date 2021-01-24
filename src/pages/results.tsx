import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'

import Base from '../templates/base'
import ResultsContainer from '../components/results/ResultsContainer/index'
import Oops from '../components/shared/Oops/index'

export default function Results(): ReactElement {
  const router = useRouter()
  const { q: searchQuery } = router.query

  return (
    <Base title="JS Crawler | Results">
      { searchQuery ? <ResultsContainer searchFor={searchQuery as string} /> : <Oops /> }
    </Base>
  )
}
