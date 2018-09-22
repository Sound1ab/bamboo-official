import * as React from 'react'
import { colors, styled, spacing } from '../../../theme'
import { Lemon, Heading, Button } from '../../atoms'
import { css } from 'react-emotion'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${spacing.xs}px;
  & * + * {
    padding-left: ${spacing.xxs}px;
  }
`

interface Prop {
  max: number
  min: number
  ratings: number
  handleSubmitRating?: () => void
}

interface State {
  currentValue: number
  selectedValue: number
}

export class Rating extends React.Component<Prop, State> {
  public static defaultProps = {
    max: 5,
    min: 0,
    ratings: 85,
    handleSubmitRating: (): null => null,
  }

  public state = {
    currentValue: -1,
    selectedValue: -1,
  }

  public render() {
    return (
      <React.Fragment>
        <Heading type="h6" textTransform="lowercase" marginBottom>
          your rating:
        </Heading>
        <Wrapper>
          {Array(this.props.max)
            .fill(1, 0)
            .map((v, i) => (
              <button
                className={css`
                  flex: 1 1;
                `}
                key={i}
                onMouseEnter={this.handleMouseEnter.bind(this, i)}
                onMouseLeave={this.handleMouseLeave.bind(this, null)}
                onClick={this.handleClick.bind(this, i)}
              >
                <Lemon fill={this.pickColor(i)} width="28px" height="28px" />
              </button>
            ))}
          <Heading
            className={css`
              margin-left: ${spacing.s}px;
            `}
            type="h6"
            textTransform="lowercase"
            marginBottom
          >
            ({this.props.ratings} ratings)
          </Heading>
        </Wrapper>
        <Button type="secondary" onClick={this.props.handleSubmitRating}>
          rate it
        </Button>
      </React.Fragment>
    )
  }

  private pickColor(index: number) {
    const isEven = index % 2
    let fill: string
    if (index <= this.state.currentValue && !isEven) {
      fill = colors.accent
    } else if (index <= this.state.currentValue && isEven) {
      fill = colors.brand
    } else {
      fill = colors.black
    }
    return fill
  }

  private handleMouseEnter(index: number) {
    this.setState({ currentValue: index })
  }

  private handleMouseLeave() {
    this.setState({
      currentValue:
        this.state.selectedValue > -1 ? this.state.selectedValue : -1,
    })
  }

  private handleClick(index: number) {
    this.setState({ currentValue: index, selectedValue: index })
  }
}
