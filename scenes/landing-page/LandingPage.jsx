import {
  AboutUs,
  // Accordion,
  // Advantage,
  FreeAudit,
  HeroSection,
  Map,
  SitesList,
  WeCan,
} from './components'
import dynamic from 'next/dynamic'

const DynamicAccordion = dynamic(() =>
  import('./components/accordion/Accordion').then((data) => data.default)
)

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Map />
      <FreeAudit />
      <SitesList />
      <DynamicAccordion />
      {/* <Accordion /> */}
      <AboutUs />
      <WeCan />

      {/*<OurServices />*/}
    </div>
  )
}

export default LandingPage
