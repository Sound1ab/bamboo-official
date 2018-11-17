import * as React from 'react'
import { css } from 'react-emotion'
import {
  Container,
  FluidImage,
  Heading,
  Ricebowl,
  sticky,
} from '../components/atoms'
import { ImageTextContainer } from '../components/atoms/Container'
import { StickyBuyer } from '../components/molecules'
import { MediaQuery } from '../components/utility'
import { colors, spacing } from '../theme'
import { Generic } from './Generic'

interface Props {
  navbarIsSticky?: boolean
}

const MAX_WIDTH_MEDIA = 600

export const Product = ({ navbarIsSticky = true }: Props) => (
  <Generic navbarIsSticky={navbarIsSticky}>
    <MediaQuery maxWidth={MAX_WIDTH_MEDIA}>
      {(_, isMatchMedia) => (
        <React.Fragment>
          {isMatchMedia && (
            <Container>
              <Heading type="h2" marginBottom>
                Baam Boom Sauce
              </Heading>
              <Heading type="h4" marginBottom>
                £8.90
              </Heading>
            </Container>
          )}
          <Container
            className={css`
              display: flex;
              justify-content: space-between;
              align-items: stretch;
            `}
            marginBottom
          >
            <div
              className={css`
                flex: 1;
              `}
            >
              <FluidImage
                style={{ width: '100%', height: '480px' }}
                image="bambooproductcover2"
                title="product homepage banner"
                alt="product homepage banner"
              />
              {isMatchMedia && <StickyBuyer isStatic hasNoProductInformation />}
              {!isMatchMedia && (
                <React.Fragment>
                  <div
                    className={css`
                      padding: ${spacing.m}px;
                      text-align: center;
                    `}
                  >
                    <Ricebowl fill={colors.black} width="80px" height="80px" />
                  </div>
                  <ImageTextContainer
                    firstChild={
                      <FluidImage
                        style={{ width: '100%', height: '320px' }}
                        image="bambooproductcover2"
                        title="product homepage banner"
                        alt="product homepage banner"
                      />
                    }
                    secondChild={
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec sagittis diam vitae diam bibendum feugiat. Quisque
                        mauris lacus, varius iaculis tempor eget, efficitur et
                        felis. Aenean ac lectus felis. Vestibulum eget
                        sollicitudin arcu. Integer eget arcu lobortis, hendrerit
                        felis vel, posuere nulla.
                      </div>
                    }
                    marginBottom
                  />
                  <ImageTextContainer
                    secondChild={
                      <FluidImage
                        style={{ width: '100%', height: '240px' }}
                        image="bambooproductcover2"
                        title="product homepage banner"
                        alt="product homepage banner"
                      />
                    }
                    firstChild={
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec sagittis diam vitae diam bibendum feugiat. Quisque
                        mauris lacus, varius iaculis tempor eget, efficitur et
                        felis. Aenean ac lectus felis. Vestibulum eget
                        sollicitudin arcu. Integer eget arcu lobortis, hendrerit
                        felis vel, posuere nulla.
                      </div>
                    }
                  />
                </React.Fragment>
              )}
            </div>
            {!isMatchMedia && (
              <div
                className={css`
                  flex: 0 0 ${spacing.xl * 2 + spacing.s}px;
                  margin-left: ${spacing.m}px;
                `}
              >
                <div
                  className={css`
                    ${sticky};
                    top: 124px;
                  `}
                >
                  <StickyBuyer isStatic />
                </div>
              </div>
            )}
          </Container>
          <Container>
            <div
              className={css`
                padding: ${spacing.m}px;
                text-align: center;
              `}
            >
              <Ricebowl fill={colors.black} width="80px" height="80px" />
            </div>
          </Container>
          <Container
            className={css`
              display: flex;
              flex-wrap: nowrap;
              & > div {
                flex: 1;
              }
              & > div:not(:last-child) {
                margin: 0 ${spacing.m}px 0 0;
              }
              @media (max-width: ${MAX_WIDTH_MEDIA}px) {
                flex-wrap: wrap;
                & > div {
                  flex: 1 1 100%;
                }
                & > div:not(:last-child) {
                  margin: 0 0 ${spacing.m}px 0;
                }
              }
            `}
            marginBottom
          >
            <div>
              <FluidImage
                style={{ width: '100%', height: '240px' }}
                image="bambooproductcover2"
                title="product homepage banner"
                alt="product homepage banner"
              />
              <div
                className={css`
                  display: flex;
                  justify-content: space-between;
                  margin-top: ${spacing.xs}px;
                `}
              >
                <span>Heading left</span>
                <span>Heading right</span>
              </div>
            </div>
            <div>
              <FluidImage
                style={{ width: '100%', height: '240px' }}
                image="bambooproductcover2"
                title="product homepage banner"
                alt="product homepage banner"
              />
              <div
                className={css`
                  display: flex;
                  justify-content: space-between;
                  margin-top: ${spacing.xs}px;
                `}
              >
                <span>Heading left</span>
                <span>Heading right</span>
              </div>
            </div>
            <div>
              <FluidImage
                style={{ width: '100%', height: '240px' }}
                image="bambooproductcover2"
                title="product homepage banner"
                alt="product homepage banner"
              />
              <div
                className={css`
                  display: flex;
                  justify-content: space-between;
                  margin-top: ${spacing.xs}px;
                `}
              >
                <span>Heading left</span>
                <span>Heading right</span>
              </div>
            </div>
          </Container>
        </React.Fragment>
      )}
    </MediaQuery>
  </Generic>
)
