import Head from 'next/head'
import AppCollection from '../components/app-collection'
import Footer from '../components/footer'
import HeroHeader from '../components/hero-header'
import { APPS } from '../lib/constants'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pocket Ninja</title>

        <meta property="og:url" content="https://pocketninja.dev/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pocket Ninja"
        />
        <meta
          property="og:description"
          content="Home of Pocket Apps LLC"
        />
        <meta property="og:image" content="/logo_black.png" />

        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-1680034082323710" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    
// Meta Pixel Code (Maybe remove it)
<script src="../lib/meta-pixel.js"></script>
<noscript><img height="1" width="1" src="https://www.facebook.com/tr?id=1295075370978677&ev=PageView&noscript=1"/></noscript>
// End Meta Pixel Code

      </Head>

      <main>
        <HeroHeader />
        <AppCollection items={APPS} />
        <Footer />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
