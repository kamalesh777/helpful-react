import { IMAGE_BASE_PATH } from '@constants/AppConstant'
import React from 'react'

import NextImage from './Image'

interface propTypes {
  appName: string | undefined
  className?: string
  width?: number
  height?: number
}

const AppImage = ({ appName, className, width, height }: propTypes): JSX.Element => {
  // render app image according to the app name
  const renderAppImage = (name: string | undefined): JSX.Element => {
    switch (name) {
      case 'pypa-hr':
        return <NextImage {...{ width: width != null ? width : 15, height: height != null ? height : 20, alt: 'pypa-hr-brand-image', src: `${IMAGE_BASE_PATH}p-hr.svg` }}/>
      case 'pypa-hire':
        return <NextImage {...{ width: width != null ? width : 15, height: height != null ? height : 20, alt: 'pypa-hire-brand-image', src: `${IMAGE_BASE_PATH}p-hire.svg`, className }} />
      default :
        return <p>--</p>
    }
  }
  return (
    renderAppImage(appName)
  )
}

export default AppImage