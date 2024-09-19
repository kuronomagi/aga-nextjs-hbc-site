'use client';

import { styled } from 'styled-components';
import { space } from 'styled-system';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

// theme
import { theme } from '~/theme';
import mq from '~/theme/media';

type CustomProps = StyledSystemDefaultProps;

export const Wrapper = styled('div')<CustomProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--forbidden-bg);
  ${space};
`;

export const Inner = styled('div')<CustomProps>`
  padding: 50px;

  ${mq.down`
    width: 80%;
    padding: 8% 0;
  `}
  ${space};
`;

export const TitleWrapper = styled('div')<CustomProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${space};
`;

export const TitleH2 = styled('h2')<CustomProps>`
  color: var(--forbidden-title);
  font-family: ${theme.fontFamily[0]};
  font-size: ${theme.fontSizes[15]}px;
  margin: 0;
`;

export const TitleH3 = styled('h2')<CustomProps>`
  color: var(--forbidden-title);
  font-size: ${theme.fontSizes[6]}px;
`;

export const TitleDescription = styled('p')<CustomProps>`
  color: var(--forbidden-title);
  font-size: ${theme.fontSizes[5]}px;
`;

export const Text = styled('p')<CustomProps>`
  color: var(--forbidden-txt);
  font-size: ${theme.fontSizes[5]}px;
`;
