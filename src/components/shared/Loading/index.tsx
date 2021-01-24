import React, { ReactElement } from 'react'
import { Button, Result } from 'antd'
import { useRouter } from 'next/router'
import config from '../../../../config/default'

export default function NotFound(): ReactElement {
  const router = useRouter()

  const backHome = () => {
    router.push(config.routes.home())
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={backHome}>Back Home</Button>}
    />
  )
}
