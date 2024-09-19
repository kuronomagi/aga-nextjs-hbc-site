import { styled } from 'styled-components';
import { space } from 'styled-system';
import { theme } from '~/theme';
import mq from '~/theme/media';
import { StyledSystemDefaultProps } from '~/types/Common';

export const Wrapper = styled('div')<StyledSystemDefaultProps>`
  position: relative;
  ${space};
`;

export const Text = styled('p')<StyledSystemDefaultProps>`
  position: relative;
  text-align: center;
  ${space};
`;
