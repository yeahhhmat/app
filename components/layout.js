import Head from 'next/head'
import {Header} from '../components/header'

const Layout = (props) => (
  <>
    <Head>
      <title>With Cookies</title>
    </Head>
    <Header />
    <main>
      <div className="container mx-auto">{props.children}</div>
    </main>
  </>
)

export default Layout
