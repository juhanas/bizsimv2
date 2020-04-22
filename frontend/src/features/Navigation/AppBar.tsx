import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { AppBarFull } from './navigationComponents/AppBarFull'
import { AppBarMobile } from './navigationComponents/AppBarMobile'

export const AppBar = () => {
  const showFullAppBar = useMediaQuery('(min-width:600px)')
  return (
    <div className="app-bar">
      {showFullAppBar && <AppBarFull />}
      {!showFullAppBar && <AppBarMobile />}
    </div>
  )
}
