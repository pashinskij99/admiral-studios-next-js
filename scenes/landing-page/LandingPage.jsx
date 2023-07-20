// import { FreeAudit, HeroSection, Map } from './components'
// import dynamic from 'next/dynamic'

// const DynamicAccordion = dynamic(
//   () => import('./components/accordion/Accordion').then((data) => data.default),
//   {
//     ssr: false,
//   }
// )

// const DynamicSitesList = dynamic(
//   () =>
//     import('./components/sites-list/SitesList').then((data) => data.default),
//   {
//     ssr: false,
//   }
// )

// const DynamicAboutUs = dynamic(
//   () => import('./components/about-us/AboutUs').then((data) => data.default),
//   {
//     ssr: false,
//   }
// )

// const DynamicWeCan = dynamic(
//   () => import('./components/we-can/WeCan').then((data) => data.default),
//   {
//     ssr: false,
//   }
// )

const LandingPage = () => {
  return (
    <div>
      {/* <HeroSection />
      <Map />
      <FreeAudit />
      <DynamicSitesList />
      <DynamicAccordion />
      <DynamicAboutUs />
      <DynamicWeCan /> */}
    </div>
  )
}

export default LandingPage
