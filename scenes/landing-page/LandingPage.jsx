import {
  AboutUs,
  Accordion,
  Advantage,
  FreeAudit,
  HeroSection,
  Map,
  OurServices,
  SitesList,
  WeCan,
} from './components'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Map />
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
