import * as React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { colors, typography, spacing } from '../../../theme'

interface PropTypes {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: PropTypes) => (
  <EmotionThemeProvider theme={{ colors, typography, spacing }}>{children}</EmotionThemeProvider>
)
