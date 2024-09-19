'use client';

import { styled } from 'styled-components';
import { space } from 'styled-system';

import { isBlank } from '~/services/checkBlank';

import { StyledSystemDefaultProps } from '~/types/Common';

interface CustomProps extends StyledSystemDefaultProps {
  color?: string;
}
export const Wrapper = styled('div')<CustomProps>`
  display: block;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e9e9e9;
  border-top: ${props => (!isBlank(props.color) ? `1px solid ${props.color}` : '1px solid #e9e9e9')};
  ${space};
`;
