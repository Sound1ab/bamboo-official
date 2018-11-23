import * as React from 'react'
import { colors } from '../../../theme'

interface RenderProps {
  handleMouseEnter: (index: number) => any
  handleMouseLeave: () => any
  handleClick: (index: number) => any
  pickColor: (index: number, oddColor?: string, evenColor?: string, fallback?: string) => string
  currentValue: number
  selectedValue: number
}

interface Props {
  max: number
  min: number
  ratings: number
  children?: (props: RenderProps) => any
}

interface State {
  currentValue: number
  selectedValue: number
}

export class QuantityChooser extends React.Component<Props, State> {
  public static defaultProps = {
    max: 5,
    min: 0,
    ratings: 85,
  }

  public state = {
    currentValue: -1,
    selectedValue: -1,
  }

  public render() {
    const { currentValue, selectedValue } = this.state
    return this.props.children({
      currentValue,
      handleClick: this.handleClick,
      handleMouseEnter: this.handleMouseEnter,
      handleMouseLeave: this.handleMouseLeave,
      pickColor: this.pickColor,
      selectedValue,
    })
  }

  public handleMouseEnter = (index: number) => {
    this.setState({ currentValue: index })
  }

  public handleMouseLeave = () => {
    this.setState({
      currentValue: this.state.selectedValue > -1 ? this.state.selectedValue : -1,
    })
  }

  public handleClick = (index: number) => {
    this.setState({ currentValue: index, selectedValue: index })
  }

  private pickColor = (
    index: number,
    oddColor: string = colors.accent,
    evenColor: string = colors.brand,
    fallback: string = colors.black,
  ) => {
    const isEven = index % 2
    let fill: string
    if (index <= this.state.currentValue && !isEven) {
      fill = oddColor
    } else if (index <= this.state.currentValue && isEven) {
      fill = evenColor
    } else {
      fill = fallback
    }
    return fill
  }
}
