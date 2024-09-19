'use client';

import { styled } from 'styled-components';
import { space } from 'styled-system';

import { StyledSystemDefaultProps } from '~/types/Common';
import { theme } from '~/theme';
import mq from '~/theme/media';

export const WrapperContainer = styled('div')<StyledSystemDefaultProps>`
  position: relative;

  .c-main-photo-bottom-texts {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    max-width: 660px;
    margin: 0 auto;
    display: block;
  }

  .c-main-photo-bottom-texts-bg-image-wrapper {
    position: relative;
    display: block;
    width: 300px;
    height: 200px;
  }

  .c-main-photo-bottom-texts-bg-image {
    display: block;
    width: 300px;
    height: 200px;
  }

  .c-main-photo-bottom-texts-image {
    display: block;
    width: 100%;
    height: 100%;
    scale: 1.32;

    ${mq.down`
      scale: 1.22;
      margin-left: -10px;
    `}
  }
`;

export const Wrapper = styled('div')<StyledSystemDefaultProps>`
  position: relative;
  width: 100%;
  max-width: 660px;

  margin-right: auto;
  margin-left: auto;
  padding-top: 660px;

  ${mq.down`
    max-width: 85%;
    padding-top: 100%;
  `}

  ${space};

  &.pt-546 {
    padding-top: 546px;

    ${mq.down`
      padding-top: 80%;
    `}
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    will-change: opacity;

    /* padding-top: 77.6%; */
    /* padding-top: 100%; */

    ${mq.down`
      padding-top: 100%;
    `}
  }
`;
