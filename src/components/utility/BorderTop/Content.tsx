'use client';

import React from 'react';

import { Wrapper } from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface CustomProps extends StyledSystemDefaultProps {
  color?: string;
}

export const BorderTop: React.FC<CustomProps> = ({ mt, mr, mb, ml, pt, pr, pb, pl, color }) => {
  return <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl} color={color}></Wrapper>;
};

export default BorderTop;
