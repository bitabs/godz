import { css, styled, theme } from '@theme'

/** Default styles */
export const Default = css({
  color: theme.colors.slate300,
  backgroundColor: 'blue',
})

export const Root = styled('button', Default)
