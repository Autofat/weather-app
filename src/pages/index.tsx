import Image from 'next/image'
import { Inter } from 'next/font/google'
import Content from '@/components/layouts/Content'
import ErrorModal from '@/components/elements/FirstModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
      <Content/>
   </div> 
  )
}
