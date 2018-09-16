import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { colors, spacing, typography } from '../../../theme'

interface PropTypes {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: PropTypes) => (
  <EmotionThemeProvider theme={{ colors, typography, spacing }}>{children}</EmotionThemeProvider>
)
