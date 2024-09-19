'use client';

import React from 'react';

import { Wrapper } from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

/**
 * space: number | (number | string)[];
 * break point: mt={[1, 2]} => mt={[sp, tab]}
 */

export const Space: React.FC<StyledSystemDefaultProps> = ({ mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}></Wrapper>;
};

export default React.memo(Space);
