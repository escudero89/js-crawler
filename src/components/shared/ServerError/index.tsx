import React, { ReactElement } from 'react'
import { Button, Result } from 'antd'
import { useRouter } from 'next/router'
import config from '../../../../config/default'

export default function ServerError(): ReactElement {
  const router = useRouter()

  const backHome = () => {
    router.push(config.routes.home())
  }

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary" onClick={backHome}>Back Home</Button>}
    />
  )
}
