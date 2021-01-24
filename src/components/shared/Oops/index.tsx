import React, { ReactElement } from 'react'
import { Button, Result } from 'antd'
import { useRouter } from 'next/router'
import config from '../../../../config/default'

export default function Oops(): ReactElement {
  const router = useRouter()

  const backHome = () => {
    router.push(config.routes.home())
  }

  return (
    <Result
      status="error"
      title="Get me out of here"
      subTitle="Sorry, something went wrong with your request."
      extra={<Button type="primary" onClick={backHome}>Back Home</Button>}
    />
  )
}
