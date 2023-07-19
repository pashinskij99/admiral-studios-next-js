import { memo } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import geography from './map-info.json'

const MapChart = ({ setTooltipContent }) => {
  return (
    <div className='container'>
      <div data-tip='' style={{ marginLeft: '-10%' }}>
        <ComposableMap>
          <Geographies geography={geography}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`)
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('')
                  }}
                  style={{
                    default: {
                      fill: geo.properties['we-work'] ? '#006cff' : '#D6D6DA',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#006cff',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  )
}

export default memo(MapChart)
