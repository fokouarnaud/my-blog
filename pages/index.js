import Head from 'next/head'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
   <div>
     <Head>
       <title>Acti-blog</title>
     </Head>
     <NavBar/>
     <Hero/>
    </div>
  )
}