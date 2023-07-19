import {
  AboutUs,
  Accordion,
  // Advantage,
  FreeAudit,
  HeroSection,
  // Map,
  // OurServices,
  SitesList,
  WeCan,
} from './components'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./components/map/Map'), {
  ssr: false,
})

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <DynamicMap />
      <FreeAudit />
      <SitesList />
      <Accordion />
      <AboutUs />
      {/*<OurServices />*/}
      <WeCan />
    </div>
  )
}

export default LandingPage
