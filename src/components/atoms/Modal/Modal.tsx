import * as React from 'react'
import styled, { css } from 'react-emotion'
import * as ReactModal from 'react-modal'
import { colors, spacing } from '../../../theme'
import { Close } from '../SvgIcon'

const root = process.env.STORYBOOK_MODAL === 'STORYBOOK' ? '#root' : '#___gatsby'

ReactModal.setAppElement(root)

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
    z-index: 12;
    outline: none;
  `,
  // tslint:disable-next-line
  afterOpen: css`
    opacity: 1;
    transition: opacity 150ms;
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
  z-index: 12;
  outline: none;
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
  modalChildren?: React.ComponentType | Element | JSX.Element
  children?: (open: () => void) => any
  role?: string
}

export class Modal extends React.Component<Props> {
  public static defaultProps = {
    contentLabel: 'Modal',
    role: 'Dialog',
  }

  public state = {
    isOpen: false,
  }

  public render() {
    const { contentLabel, modalChildren, children, role } = this.props
    return (
      <React.Fragment>
        <ReactModal
          overlayClassName={portalStyles}
          className={modalStyles}
          isOpen={this.state.isOpen}
          contentLabel={contentLabel}
          closeTimeoutMS={150}
          role={role}
          onRequestClose={this.close()}
          shouldCloseOnOverlayClick
          shouldFocusAfterRender
          shouldCloseOnEsc
          shouldReturnFocusAfterClose
        >
          <RightButton onClick={this.close()}>
            <Close fill={colors.black} width="28px" height="28px" />
          </RightButton>
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
