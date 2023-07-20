import {
  // AboutUs,
  // Accordion,
  // Advantage,
  // FreeAudit,
  HeroSection,
  Map,
  // SitesList,
  // WeCan,
} from './components'
import dynamic from 'next/dynamic'

const DynamicAccordion = dynamic(() =>
  import('./components/accordion/Accordion').then((data) => data.default)
)

const DynamicFreeAudit = dynamic(() =>
  import('./components/free-audit/FreeAudit').then((data) => data.default)
)

const DynamicSitesList = dynamic(() =>
  import('./components/sites-list/SitesList').then((data) => data.default)
)

const DynamicAboutUs = dynamic(() =>
  import('./components/about-us/AboutUs').then((data) => data.default)
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
      <DynamicFreeAudit />
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
