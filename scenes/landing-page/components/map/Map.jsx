/** @format */

import { useEffect, useState } from 'react'
// import ReactTooltip from 'react-tooltip'

import Wave from '../../../../components/wave/Wave'
import { MapChart } from './components'
import geography from './components/map-chart/map-info.json'

import styles from './Map.module.scss'
import dynamic from 'next/dynamic'

const DynamicReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
})

const Map = () => {
  const [content, setContent] = useState('')
  const [percentWork, setPercentWork] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const allCounty = geography.objects.world.geometries.length
    const weWorkCounty = geography.objects.world.geometries.reduce(
      (sum, item) => {
        item.properties['we-work'] && sum++
        return sum
      },
      0
    )

    setPercentWork(Math.round((weWorkCounty / allCounty) * 100))
  }, [])

  return (
    <div className='container'>
      <h2
        className={`${styles['map-block__title']} title-2 text-weight-bold text-color-black text-center`}
      >
        Partner with a Full-Service Web Agency to Elevate Your Global Online
        Presence.
      </h2>
      <p
        className={`${styles['map-block__subtitle']} text-2 text-center text-color-black`}
      >
        At Admiral Studios, we specialize in empowering businesses worldwide
        with our full-service web agency expertise. Whether you&apos;re in North
        America, Europe, Asia, or anywhere else, our adept team crafts bespoke
        web solutions to surpass your aspirations. Let&apos;s join forces and
        catapult your online presence to unprecedented heights, making your
        business thrive globally.
      </p>
      <MapChart
        setPercentWork={setPercentWork}
        setTooltipContent={setContent}
      />
      {isMounted && (
        <DynamicReactTooltip className='tooltip' noArrow>
          {content && (
            <>
              <span className='text-weight-bold text-2'>{content}</span>
              <div className='tooltip__wave'>
                <Wave
                  fill='#006CFF'
                  paused={false}
                  height={120}
                  amplitude={10}
                  speed={0.15}
                  points={3}
                />
              </div>
            </>
          )}
        </DynamicReactTooltip>
      )}
    </div>
  )
}

export default Map
