'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';

import {
  TitleWrapper,
  ContentWrapper,
  ContentInner,
  Inner,
  TitleH2,
  TitleH3,
  Wrapper,
  Text,
  TitleDescription,
  LinkButton,
} from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

export interface LoaderProps extends StyledSystemDefaultProps {}

/**
 * space: number | (number | string)[];
 * break point: mt={[1, 2]} => mt={[sp, tab]}
 */

export const Loader: React.FC<LoaderProps> = ({ mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}>
      <p>Loading...</p>
    </Wrapper>
  );
};

export default Loader;
