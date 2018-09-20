import * as React from 'react'
import styled from 'react-emotion'

const StyledContainer = styled('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 100%;
`

interface ContainerProps {
  className?: string
}

export const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)
