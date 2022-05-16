import Head from 'next/head'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import TrendingList from '../components/TrendingList'

export default function Home() {
  return (
   <div>
     <Head>
       <title>Acti-blog</title>
     </Head>
     <NavBar/>
     <Hero/>
     <TrendingList/>
    </div>
  )
}
