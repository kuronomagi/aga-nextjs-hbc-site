'use client';

import { styled } from 'styled-components';
import { space } from 'styled-system';

import { StyledSystemDefaultProps } from '~/types/Common';
import { theme } from '~/theme';
import mq from '~/theme/media';

interface CustomProps extends StyledSystemDefaultProps {
  textPosition?: string;
}

export const Wrapper = styled('span')<CustomProps>`
  position: relative;
  display: inline-block;
  width: 100%;

  ${space};

  img {
    position: relative !important;
    height: auto !important;
  }
`;
