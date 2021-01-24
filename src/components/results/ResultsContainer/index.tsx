import React, { ReactElement } from 'react'

type ResultsContainerProps = {
  searchFor: string;
}

export default function ResultsContainer({ searchFor }: ResultsContainerProps): ReactElement {
  return (
    <div>
      Results!
      {' '}
      {searchFor}
    </div>
  )
}
