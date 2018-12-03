import React, { Component } from 'react'

interface Options {
  root: Element | null
  rootMargin: string
  threshold: number | number[]
}

interface Props {
  children: (activeElement: string) => React.ComponentType | JSX.Element | Element
  targets: string[]
}

interface State {
  activeElement: string
}

export class Observer extends Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    targets: [],
  }

  public state: State = {
    activeElement: '',
  }

  public componentDidMount = () => {
    const options: Options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.5, 0.75, 0.99, 1],
    }

    const observer = new IntersectionObserver(this.intersectionCallback, options)

    this.props.targets
      .map((target: string) => `#${target}`)
      .forEach((target: string) => {
        const targetElement = document.querySelector(target)
        observer.observe(targetElement)
      })

    this.setState({
      activeElement: this.props.targets[0],
    })
  }

  public render() {
    return this.props.children(this.state.activeElement)
  }

  private intersectionCallback = (entries: any[], observer: any) => {
    entries.forEach(entry => {
      const { boundingClientRect, rootBounds, target, isIntersecting } = entry
      const isAbove = boundingClientRect.y < rootBounds.y

      if (isAbove && isIntersecting) {
        this.setState({
          activeElement: target.id,
        })
      }
    })
  }
}
