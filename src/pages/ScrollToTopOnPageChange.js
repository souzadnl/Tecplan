import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(window.top)
  }, [pathname])

}

export default ScrollToTopOnPageChange
