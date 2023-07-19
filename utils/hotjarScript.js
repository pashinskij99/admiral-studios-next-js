import { useEffect } from 'react'
import Script from 'next/script'

function HotjarScript() {
  useEffect(() => {
    ;(function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          ;(h.hj.q = h.hj.q || []).push(arguments)
        }
      h._hjSettings = { hjid: 3392065, hjsv: 6 }
      a = o.getElementsByTagName('head')[0]
      r = o.createElement('script')
      r.async = 1
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
      a.appendChild(r)
    })(window, document, "https://static.hotjar.com/c/hotjar-','.js?sv=")
  }, [])

  return (
    <Script
      strategy='worker'
      src={"https://static.hotjar.com/c/hotjar-','.js?sv="}
    />
  )
}

export default HotjarScript
