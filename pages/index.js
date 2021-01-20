import Head from 'next/head'
import Layout from '../layout/Home/home.component';
import Menu from '../components/Menu/menu.component';

export default function Home() {
  return (
    <>
    <Head>
      <title>Home do App</title>
    </Head>
      <Layout title="Posts App"/>
      <Menu options={[{item:'Posts', to:'/posts'}]}/>
    </>
  )
}
