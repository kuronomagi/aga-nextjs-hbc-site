/*
  Doc: https://github.com/morajabi/styled-media-query

  -------------------
  lessThan("medium")
  screen width is less than 768px (medium)

  between("medium", "large")
  screen width is between 768px (medium) and 1170px (large)

  greaterThan("large")
  screen width is greater than 1170px (large)
  -------------------

  breakpoints: ['576px', '768px', '1024px', '1200px'],
  theme.breakpoints[i]
*/

import media from 'styled-media-query';
// import { FlattenInterpolation, InterpolationValue, ThemedStyledProps, css } from 'styled-components';
import { CSSProp, css } from 'styled-components';

import { theme } from '~/theme';

type InterpolationFunction<Props, Theme> = (props: any) => CSSProp;

type GeneratorFunction<Props, Theme> = (
  strings: TemplateStringsArray,
  ...interpolations: (CSSProp | InterpolationFunction<Props, Theme> | any)[]
) => any;

const mq: { [v: string]: GeneratorFunction<unknown, any> } = {
  up: (...args) => media.greaterThan('medium')(...args),
  down: (...args) => media.lessThan('medium')(...args),
  tab: (...args) => css`
    @media screen and (max-width: ${theme.breakpoints[3]}) {
      ${css(...args)}
    }
  `,
  se: (...args) => css`
    @media screen and (max-width: ${theme['breakpoint-se'][0]}) {
      ${css(...args)}
    }
  `,
};

export default mq;
