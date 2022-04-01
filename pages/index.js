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
    
    <!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1295075370978677');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1295075370978677&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
  
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
