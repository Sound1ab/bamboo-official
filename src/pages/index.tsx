import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import { KaleidoscopeWithLogo } from '../components/atoms'
import { ThemeProvider } from '../components/atoms'
import { colors } from '../theme'

const Wrapper = styled('div')`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`

const FixedKaleidoscope = styled(KaleidoscopeWithLogo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1500px;
  height: 1500px;
`

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Link to="/products">
        <Wrapper>
          <FixedKaleidoscope fill={colors.white} />
        </Wrapper>
      </Link>
    </ThemeProvider>
  )
}

export default IndexPage
