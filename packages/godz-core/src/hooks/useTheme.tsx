import React from 'react'
import addons from '@storybook/addons'

const channel = addons.getChannel()

export default function useTheme() {
  const [isDark, setDark] = React.useState(false)

  React.useEffect(() => {
    channel.on('DARK_MODE', setDark)
    return () => channel.off('DARK_MODE', setDark)
  }, [setDark])

  return isDark ? 'dark' : 'light'
}
