import Head from 'next/head'
import styles from '@/styles/Index.module.scss'
import Header from '/components/Header/Header';
import Banner from '/components/Banner/Banner';
import Map from '/components/Map/Map';
import Seasons from '/components/Seasons/Seasons';
import Visit from '/components/Visit/Visit';
import Popular from '/components/Popular/Popular';


export default function Home() {
  return (
    <>
      <Head>
        <title>Visit.Japan</title>
        <meta name="description" content="Travel! Visit Japan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Map />
      <Seasons />
      <Visit />
      <Popular />

    </>
  )
}
