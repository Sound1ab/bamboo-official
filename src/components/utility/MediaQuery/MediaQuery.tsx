import * as React from 'react'

interface Styles {
  [propName: string]: any
}

interface PropTypes {
  children: <T extends Styles>(styles: T, isMatchMedia: boolean) => React.ReactNode
  matchStyles: Styles
  nonMatchStyles: Styles
  maxWidth: number
}

interface StateTypes {
  isMatchMedia: boolean
}

export class MediaQuery extends React.Component<PropTypes, StateTypes> {
  public static defaultProps = {
    matchStyles: {},
    maxWidth: 700,
    nonMatchStyles: {},
  }

  public state = {
    isMatchMedia: false,
  }

  public componentDidMount() {
    const x = window.matchMedia(`(max-width: ${this.props.maxWidth}px)`)
    this.matchMediaCallback(x)
    x.addListener(this.matchMediaCallback)
  }

  public render() {
    const matchedStyle = this.state.isMatchMedia ? this.props.matchStyles : this.props.nonMatchStyles
    return this.props.children(matchedStyle, this.state.isMatchMedia)
  }

  private matchMediaCallback = (x: any) => {
    this.setState({
      isMatchMedia: !!x.matches,
    })
  }
}
