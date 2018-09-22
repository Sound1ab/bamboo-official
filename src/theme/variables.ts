import { FontType } from './types'

export const colors = {
  accent: '#35c2b4',
  black: '#000',
  brand: '#e97f89',
  ui: {
    offWhite: '#f5f5f5',
  },
  white: '#fff',
}

export const fontFamily: FontType[] = [
  { fontFamily: 'Brandon Bold', fileName: 'brandon_bld', format: 'woff2' },
  { fontFamily: 'Brandon Black', fileName: 'brandon_blk', format: 'woff2' },
  { fontFamily: 'Brandon Medium', fileName: 'brandon_med', format: 'woff2' },
  { fontFamily: 'Brandon Regular', fileName: 'brandon_reg', format: 'woff2' },
  { fontFamily: 'Brandon Light', fileName: 'brandon_light', format: 'woff2' },
  { fontFamily: 'Brandon Thin', fileName: 'brandon_thin', format: 'woff2' },
]

export const typography = {
  fontFamily: {
    h1: 'Brandon Bold',
    h2: 'Brandon Black',
    h3: 'Brandon Medium',
    h4: 'Brandon Black',
    h5: 'Brandon Black',
    h6: 'Brandon Black',
    p: 'Brandon Regular',
    sub: 'Brandon Bold',
  },
  fontSize: {
    h1: 65,
    h2: 38,
    h3: 25,
    h4: 20,
    h5: 18,
    h6: 16,
    p: 12,
    sub: 7,
  },
  fontWeight: {
    h1: 900,
    h2: 500,
    h3: 500,
    h4: 500,
    h5: 500,
    h6: 500,
    p: 500,
    sub: 500,
  },
  letterSpacing: {
    h1: 0.3,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    p: 0,
    sub: 0,
  },
  lineHeight: {
    h1: 1.05,
    h2: 1,
    h3: 1,
    h4: 1,
    h5: 1,
    h6: 1,
    p: 1,
    sub: 1,
  },
}

// tslint:disable-next-line
export const spacing = {
  l: 64,
  m: 32,
  s: 16,
  xl: 128,
  xs: 8,
  xxl: 256,
  xxs: 4,
}
