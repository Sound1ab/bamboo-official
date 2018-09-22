import * as React from 'react'
import { css } from 'react-emotion'
import { colors, styled } from '../../../theme'
import { Container, Heading, Logo, ShoppingCart } from '../../atoms'
import { MediaQuery } from '../../utility'

const FlexContainer = styled(Container)`
  z-index: 10;
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
`.withComponent('nav')

const columnBase = css`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LeftColumn = styled('div')`
  ${columnBase};
  justify-content: flex-start;
`

const CenterColumn = styled('div')`
  ${columnBase};
  justify-content: center;
`

const RightColumn = styled('div')`
  ${columnBase};
  justify-content: flex-end;
  & * + * {
    margin-left: ${({ theme }) => theme.spacing.m}px;
  }
`

export const NavBar = () => (
  <FlexContainer>
    <LeftColumn>
      <Heading type="h4" textTransform="uppercase" button>
        Products
      </Heading>
    </LeftColumn>
    <CenterColumn>
      <MediaQuery
        matchStyles={{ width: '80px', height: '80px' }}
        nonMatchStyles={{ width: '124px', height: '124px' }}
      >
        {styles => (
          <Logo
            fill={colors.black}
            width={styles.width}
            height={styles.height}
          />
        )}
      </MediaQuery>
    </CenterColumn>
    <RightColumn>
      <Heading type="h4" textTransform="lowercase" button>
        find us
      </Heading>
      <button>
        <ShoppingCart fill={colors.black} width="28px" height="28px" />
      </button>
    </RightColumn>
  </FlexContainer>
)
