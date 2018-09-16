import { injectGlobal } from 'emotion'
import { FontType } from './types'
import { colors, fontFamily, spacing, typography } from './variables'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
 ${fontFamily.reduce(
   (acc: string, font: FontType) => `
      ${acc}
      @font-face {
        font-family: '${font.fontFamily}';
src:
  local('${font.fileName}'),
    url(${require(`./fonts/${font.fileName}-webfont.woff2`)}) format('${font.format}');
      }
    `,
   ''
 )}
  
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${typography.fontSize.p}px !important;
    line-height: ${typography.lineHeight.p} !important;
  }

  body {
    font-family: ${typography.fontFamily.p}, Helvetica, sans-serif;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    color: ${colors.black};
    background-color: ${colors.ui.offWhite};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: ${colors.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.black};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.black};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: ${colors.ui.offWhite};
        }
        tr {
          background-color: ${colors.ui.offWhite};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-family: ${typography.fontFamily.h1};
    font-size: ${typography.fontSize.h1}px;
    font-weight: ${typography.fontWeight.h1};
    letter-spacing: ${typography.letterSpacing.h1}px;
    line-height: ${typography.lineHeight.h1};
    margin-top: 0;
    margin-bottom: ${spacing.s}px
  }

  h2 {
    font-family: ${typography.fontFamily.h2};
    font-size: ${typography.fontSize.h2}px;
    font-weight: ${typography.fontWeight.h2};
    letter-spacing: ${typography.letterSpacing.h2}px;
    line-height: ${typography.lineHeight.h2};
    margin-top: 0;
    margin-bottom: ${spacing.s}px
  }

  h3 {
    font-family: ${typography.fontFamily.h3};
    font-size: ${typography.fontSize.h3}px;
    font-weight: ${typography.fontWeight.h3};
    letter-spacing: ${typography.letterSpacing.h3}px;
    line-height: ${typography.lineHeight.h3};
    margin-top: 0;
    margin-bottom: ${spacing.s}px
  }

  h4 {
    font-family: ${typography.fontFamily.h4};
    font-size: ${typography.fontSize.h4}px;
    font-weight: ${typography.fontWeight.h4};
    letter-spacing: ${typography.letterSpacing.h4}px;
    line-height: ${typography.lineHeight.h4};
    margin-top: 0;
    margin-bottom: ${spacing.s}px
  }
  
  h5 {
    font-family: ${typography.fontFamily.h5};
    font-size: ${typography.fontSize.h5}px;
    font-weight: ${typography.fontWeight.h5};
    letter-spacing: ${typography.letterSpacing.h5}px;
    line-height: ${typography.lineHeight.h5};
    margin-top: 0;
    margin-bottom: ${spacing.s}px
  }
  
  h6 {
    font-family: ${typography.fontFamily.h6};
    font-size: ${typography.fontSize.h6}px;
    font-weight: ${typography.fontWeight.h6};
    letter-spacing: ${typography.letterSpacing.h6}px;
    line-height: ${typography.lineHeight.h6};
    margin-top: 0;
    margin-bottom: ${spacing.s}px
  }

  p {
    font-size: ${typography.fontSize.p}px;
    font-weight: ${typography.fontWeight.p};
    letter-spacing: ${typography.letterSpacing.p}px;
    margin-top: 0;
  }

  strong {
    color: ${colors.black};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.black};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.black};
    color: ${colors.black};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
