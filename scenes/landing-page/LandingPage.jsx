import {
  // AboutUs,
  // Accordion,
  // Advantage,
  FreeAudit,
  HeroSection,
  Map,
  // SitesList,
  // WeCan,
} from './components'
import dynamic from 'next/dynamic'

const DynamicAccordion = dynamic(() =>
  import('./components/accordion/Accordion').then((data) => data.default)
)

const DynamicSitesList = dynamic(() =>
  import('./components/sites-list/SitesList').then((data) => data.default)
)

const DynamicAboutUs = dynamic(
  () => import('./components/about-us/AboutUs').then((data) => data.default),
  { ssr: false }
)

const DynamicWeCan = dynamic(() =>
  import('./components/we-can/WeCan').then((data) => data.default)
)

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Map />
      {/* <FreeAudit /> */}
      <FreeAudit />
      {/* <SitesList /> */}
      <DynamicSitesList />
      <DynamicAccordion />
      {/* <Accordion /> */}
      {/* <AboutUs /> */}
      <DynamicAboutUs />
      {/* <WeCan /> */}
      <DynamicWeCan />

      {/*<OurServices />*/}
    </div>
  )
}

export default LandingPage
