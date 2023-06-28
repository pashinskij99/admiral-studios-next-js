/** @format */

import { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'

import Wave from '../../../../components/wave/Wave'
import { MapChart } from './components'
import geography from './components/map-chart/map-info.json'

import styles from './Map.module.scss'

const Map = () => {
  const [content, setContent] = useState('')
  const [percentWork, setPercentWork] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const allCounty = geography.objects.world.geometries.length
    const weWorkCounty = geography.objects.world.geometries.reduce((sum, item) => {
      item.properties['we-work'] && sum++
      return sum
    }, 0)

    setPercentWork(Math.round((weWorkCounty / allCounty) * 100))
  }, [])

  return (
    <div className='container'>
      <h2
        className={`${styles['map-block__title']} title-2 text-weight-bold text-color-black text-center`}>
        At Admiral Studios, we&apos;re proud to serve clients from around the globe.
      </h2>
      <p className={`${styles['map-block__subtitle']} text-2 text-center text-color-black`}>
        Whether You&apos;re located in North America, Europe, Asia, or beyond, our team is ready to
        create custom web solutions that exceed Your expectations. Let&apos;s work together to take
        Your online presence to new heights, no matter where You&apos;re based!
      </p>
      <MapChart setPercentWork={setPercentWork} setTooltipContent={setContent} />
      {isMounted && (
        <ReactTooltip className='tooltip' noArrow>
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
        </ReactTooltip>
      )}
    </div>
  )
}

export default Map
