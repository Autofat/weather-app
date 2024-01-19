import { Inter } from 'next/font/google'
import Content from '@/components/layouts/Content'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    <Head>
      <title>Weather App</title>
      <link rel="icon" href="/logo-putih.svg" sizes="any"/>
    </Head>
      <Content/>
   </main> 
  )
}
