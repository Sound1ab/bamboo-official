const reactDomTemplate = (code, config, state) => {
  return `import * as React from 'react' 
  
  interface PropTypes {
    fill: string,
    width: string,
    height: string,
  }
  
  export const ${state.componentName} = (props: PropTypes) => ${code}
  `
}

module.exports = reactDomTemplate
