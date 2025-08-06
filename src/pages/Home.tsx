// import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Features } from '../components/features';
import { Footer } from '../components/footer';
import { Freedom } from '../components/freedom';
import { SecuritySection } from '../components/walletcontrol';
import { MiniappsSection } from '../components/miniapps';
import { SubscribeSection } from '../components/subscribe';
import { DevSection } from '../components/devsection';

function Home() {

  return (
    <div>
      <Hero />
      <Features />
      <Freedom/>
      <SecuritySection/>
      <MiniappsSection/>
      <DevSection/>
      <SubscribeSection/>
      <Footer />
    </div>
  )
}

export default Home
