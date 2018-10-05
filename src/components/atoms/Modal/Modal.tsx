import * as React from 'react'
import * as ReactModal from 'react-modal'
import { Close } from '../SvgIcon'
import styled, { css } from 'react-emotion'
import { colors, spacing } from '../../../theme'

ReactModal.setAppElement('#root')

const modalStyles = {
  base: css`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    overflow: auto;
    transform: translate(-50%, -50%);
    background-color: white;
    max-width: ${spacing.xxl * 3}px;
    min-height: ${spacing.xl * 2}px;
    width: 80%;
    opacity: 0;
  `,
  afterOpen: css`
    opacity: 1;
    transition: all 150ms;
  `,
  beforeClose: css`
    opacity: 0;
  `,
}

const portalStyles = css`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & :-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`

const RightButton = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${spacing.xs}px;
`

interface Props {
  contentLabel?: string
  modalChildren?: React.ComponentType
  children?: (open: () => void) => any
}

export class Modal extends React.Component<Props> {
  public static defaultProps = {
    contentLabel: 'Modal',
  }

  public state = {
    isOpen: true,
  }

  public render() {
    const { contentLabel, modalChildren, children } = this.props
    return (
      <React.Fragment>
        <ReactModal
          overlayClassName={portalStyles}
          className={modalStyles as any}
          isOpen={this.state.isOpen}
          contentLabel={contentLabel}
          closeTimeoutMS={150}
        >
          <RightButton onClick={this.close()}>
            <Close fill={colors.black} width="28px" height="28px" />
          </RightButton>
          <p>hello</p>
          {modalChildren}
        </ReactModal>
        {children && children(this.open())}
      </React.Fragment>
    )
  }

  private open() {
    return () => {
      this.setState({
        isOpen: true,
      })
    }
  }

  private close() {
    return () => {
      this.setState({
        isOpen: false,
      })
    }
  }
}
