'use client';

import React from 'react';

// components
import { TitleWrapper, Inner, TitleH2, TitleH3, Wrapper, Text, TitleDescription } from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

/**
 * space: number | (number | string)[];
 * break point: mt={[1, 2]} => mt={[sp, tab]}
 */

export const Forbidden: React.FC<StyledSystemDefaultProps> = ({ mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}>
      <Inner>
        <TitleWrapper>
          <TitleH2>403</TitleH2>
          <TitleDescription>Forbidden</TitleDescription>
        </TitleWrapper>

        <div>
          <TitleH3>閲覧できません。</TitleH3>
          <Text>
            お探しのページは存在しないか、URLが変更されている可能性があります。
            <br />
            また、URLにタイプミスがないか再度ご確認ください。
          </Text>
          <Text>
            <span>I&apos;m sorry. Oops Page Not Found</span>
            <br />
            The page you are looking for does not exist or has been moved.
          </Text>
        </div>
      </Inner>
    </Wrapper>
  );
};

export default Forbidden;
