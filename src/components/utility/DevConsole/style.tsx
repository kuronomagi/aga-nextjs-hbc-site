'use client';

import { styled } from 'styled-components';
import { space } from 'styled-system';

import { StyledSystemDefaultProps } from '~/types/Common';

type CustomProps = StyledSystemDefaultProps;

export const Wrapper = styled('div')<CustomProps>`
  display: block;
  margin: 20px;
  ${space};
`;
