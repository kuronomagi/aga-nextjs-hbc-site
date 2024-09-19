'use client';

import { styled } from 'styled-components';
import { space } from 'styled-system';

import { StyledSystemDefaultProps } from '~/types/Common';
import { theme } from '~/theme';
import mq from '~/theme/media';

interface CustomProps extends StyledSystemDefaultProps {}

export const Wrapper = styled('div')<CustomProps>`
  position: relative;

  ${space};
`;

export const TagAWrapper = styled('a')<CustomProps>`
  position: relative;
  display: inline-block;
  width: 100%;

  ${space};
`;
