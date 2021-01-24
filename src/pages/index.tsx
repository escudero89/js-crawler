import React, { ReactElement } from 'react'

import Base from '../templates/base'
import SearchBox from '../components/home/SearchBox/index'

export default function Home(): ReactElement {
  return (
    <Base title="JS Crawler | Search The Web">
      <SearchBox />
    </Base>
  )
}
