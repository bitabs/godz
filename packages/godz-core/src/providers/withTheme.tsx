import React from 'react'
import { useTheme } from '../hooks'
import { lightMode, darkMode } from '@theme'

export default function WithTheme({ children }: React.PropsWithChildren<void>) {
  const theme = useTheme()

  return (
    <div className={theme === 'light' ? lightMode : darkMode}>{children}</div>
  )
}
