import {
  AboutUs,
  Accordion,
  // Advantage,
  FreeAudit,
  HeroSection,
  Map,
  // OurServices,
  SitesList,
  WeCan,
} from './components'
// import dynamic from 'next/dynamic'

// const DynamicMap = dynamic(() => import('./components/map/Map'), {
//   ssr: false,
// })

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Map />
      {/* <FreeAudit /> */}
      {/* <SitesList /> */}
      {/* <Accordion /> */}
      {/* <AboutUs /> */}
      {/* <WeCan /> */}

      {/*<OurServices />*/}
    </div>
  )
}

export default LandingPage
