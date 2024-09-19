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
  background: var(--not-found-bg);
  ${space};
`;

export const Inner = styled('div')<CustomProps>`
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export const ContentWrapper = styled('div')<CustomProps>`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${space};
`;

export const ContentInner = styled('div')<CustomProps>`
  margin-top: 50px;

  ${space};
`;

export const TitleH2 = styled('h2')<CustomProps>`
  color: var(--not-found-title);
  font-family: ${theme.fontFamily[0]};
  font-size: ${theme.fontSizes[15]}px;
  margin: 0;
`;

export const TitleH3 = styled('h2')<CustomProps>`
  color: var(--not-found-title);
  font-size: ${theme.fontSizes[6]}px;
  font-weight: 700;
  text-align: center;

  ${mq.down`
    font-size: ${theme.fontSizes[4]}px;
  `}
`;

export const TitleDescription = styled('p')<CustomProps>`
  color: var(--not-found-title);
  font-size: ${theme.fontSizes[5]}px;
  font-weight: 700;
`;

export const Text = styled('p')<CustomProps>`
  color: var(--not-found-txt);
  font-size: ${theme.fontSizes[5]}px;

  ${mq.down`
    font-size: ${theme.fontSizes[2]}px;
  `}
`;

export const LinkButton = styled('div')<CustomProps>`
  text-align: center;

  a {
    display: inline-block;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  .link-button-text {
    font-size: ${theme.fontSizes[5]}px;
    ${mq.down`
      font-size: ${theme.fontSizes[2]}px;
    `}
  }

  ${space};
`;
