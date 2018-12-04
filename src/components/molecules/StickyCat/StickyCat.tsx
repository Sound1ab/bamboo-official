import * as React from 'react'
import styled from 'react-emotion'

import { colors, spacing } from '../../../theme'
import { Cat } from '../../atoms'

interface StickyCatProps {
  color?: string
  text?: string[]
  activeElementIndex?: number
}

const Wrapper = styled('div')`
  width: ${spacing.l + spacing.m}px;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
`

const Text = styled('p')<{ color: string; opacity: number }>`
  font-weight: bold;
  margin-bottom: 0;
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  position: absolute;
`

export const StickyCat = ({ color = colors.black, text = [], activeElementIndex = 0 }: StickyCatProps) => (
  <Wrapper>
    <Cat fill={color} width="50px" height="50px" />
    {text.map((singleText, index) => (
      <Text opacity={activeElementIndex === index ? 1 : 0} color={color}>
        {singleText}
      </Text>
    ))}
  </Wrapper>
)
