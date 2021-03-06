import { injectGlobal } from 'emotion'

import { FontType } from './types'
import { colors, fontFamily, typography } from './variables'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
 ${fontFamily.reduce(
   (acc: string, font: FontType) => `
      ${acc}
      @font-face {
        font-family: '${font.fontFamily}';
src:
  local('${font.fileName}'),
    url(${require(`../assets/fonts/${font.fileName}-webfont.woff2`)}) format('${font.format}');
      }
    `,
   '',
 )}
  
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    //box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.75);
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
    color: ${colors.black};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
  
  a span {
    text-decoration: underline;
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
  
  textarea, select, input, button { outline: none; }

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
  
  button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`
