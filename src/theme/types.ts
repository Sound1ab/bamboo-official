export interface Theme {
  colors: {
    readonly brand: string
    readonly accent: string
    ui: {
      readonly offWhite: string
    }
    readonly white: string
    readonly black: string
  }
  spacing: {
    readonly xxl: number
    readonly xl: number
    readonly l: number
    readonly m: number
    readonly s: number
    readonly xs: number
    readonly xxs: number
    [key: number]: number
  }
  typography: {
    fontFamily: {
      readonly h1: string
      readonly h2: string
      readonly h3: string
      readonly h4: string
      readonly h5: string
      readonly h6: string
      readonly p: string
      readonly sub: string
      [key: string]: string
    }
    fontSize: {
      readonly h1: number
      readonly h2: number
      readonly h3: number
      readonly h4: number
      readonly h5: number
      readonly h6: number
      readonly p: number
      readonly sub: number
      [key: number]: number
    }
    fontWeight: {
      readonly h1: number
      readonly h2: number
      readonly h3: number
      readonly h4: number
      readonly h5: number
      readonly h6: number
      readonly p: number
      readonly sub: number
      [key: number]: number
    }
    letterSpacing: {
      readonly h1: number
      readonly h2: number
      readonly h3: number
      readonly h4: number
      readonly h5: number
      readonly h6: number
      readonly p: number
      readonly sub: number
      [key: number]: number
    }
    lineHeight: {
      readonly h1: number
      readonly h2: number
      readonly h3: number
      readonly h4: number
      readonly h5: number
      readonly h6: number
      readonly p: number
      readonly sub: number
      [key: number]: number
    }
    marginBottom: {
      readonly h1: number
      readonly h2: number
      readonly h3: number
      readonly h4: number
      readonly h5: number
      readonly h6: number
      [key: number]: number
    }
  }
}

export interface FontType {
  fontFamily: string
  fileName: string
  format: string
}
