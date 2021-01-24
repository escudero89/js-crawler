import React, { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { Layout } from 'antd'

const { Header, Content } = Layout

const NavigationBar = () => <></>

type BaseProps = {
  title: string;
  children: ReactNode;
}

export default function Base({ title, children }: BaseProps): ReactElement {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Header>
            <NavigationBar />
          </Header>
          <Content>
            { children }
          </Content>
        </Layout>
      </main>
    </div>
  )
}
