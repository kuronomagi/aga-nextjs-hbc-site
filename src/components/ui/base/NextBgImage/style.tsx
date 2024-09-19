'use client';

import { styled } from 'styled-components';
import { space } from 'styled-system';

import { StyledSystemDefaultProps } from '~/types/Common';
import { theme } from '~/theme';
import mq from '~/theme/media';

interface CustomProps extends StyledSystemDefaultProps {
  textPosition?: string;
  height?: any;
}

export const Wrapper = styled.span<CustomProps>`
  /* position: relative; */
  /* display: inline-block; */
  /* width: 100%; */

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${space};

  img {
    /* position: relative !important; */
    height: auto !important;
  }
`;

export const Container = styled.section<CustomProps>`
  display: flex;
  position: relative;
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const InnerContainer = styled.div`
  z-index: 10;
`;
