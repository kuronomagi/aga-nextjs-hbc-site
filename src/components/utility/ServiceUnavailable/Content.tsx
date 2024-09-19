'use client';

import React from 'react';

import { TitleWrapper, Inner, TitleH2, TitleH3, Wrapper, Text, TitleDescription } from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

/**
 * space: number | (number | string)[];
 * break point: mt={[1, 2]} => mt={[sp, tab]}
 */

export const ServiceUnavailable: React.FC<StyledSystemDefaultProps> = ({ mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}>
      <Inner>
        <TitleWrapper>
          <TitleH2>503</TitleH2>
          <TitleDescription>Service Unavailable</TitleDescription>
        </TitleWrapper>

        <div>
          <TitleH3>ページが表示できませんでした。</TitleH3>
          <Text>現在サーバーが一時的に利用できません。</Text>
          <Text>
            <span>
              ​​The page could not be displayed.
              <br />
              Server is temporarily unavailable at this time
            </span>
          </Text>
        </div>
      </Inner>
    </Wrapper>
  );
};

export default ServiceUnavailable;
