import * as React from 'react'

type styles = {
  [propName: string]: any
}

interface PropTypes {
  children: <T extends styles>(styles: T) => React.ReactNode
  matchStyles: styles
  nonMatchStyles: styles
  maxWidth: number
}

interface StateTypes {
  isMatchMedia: boolean
}

export class MediaQuery extends React.Component<PropTypes, StateTypes> {
  public static defaultProps = {
    matchStyles: {},
    nonMatchStyles: {},
    maxWidth: 700,
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
    const matchedStyle = this.state.isMatchMedia
      ? this.props.matchStyles
      : this.props.nonMatchStyles
    return this.props.children(matchedStyle)
  }

  private matchMediaCallback = (x: any) => {
    this.setState({
      isMatchMedia: !!x.matches,
    })
  }
}
