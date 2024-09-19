'use client';

import React from 'react';

// components
import { TitleWrapper, Inner, TitleH2, TitleH3, Wrapper, Text, TitleDescription } from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

export interface InternalServerErrorProps extends StyledSystemDefaultProps {}

/**
 * space: number | (number | string)[];
 * break point: mt={[1, 2]} => mt={[sp, tab]}
 */

export const InternalServerError: React.FC<InternalServerErrorProps> = ({ mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}>
      <Inner>
        <TitleWrapper>
          <TitleH2>500</TitleH2>
          <TitleDescription>Internal Server Error</TitleDescription>
        </TitleWrapper>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 30,
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          <TitleH3>現在サーバーでエラーが発生しているため、一時的に利用できません。</TitleH3>
          <Text mt={['10px']}>
            ご不便をおかけし申し訳ございません。
            <br />
            正常にご覧いただけるよう、解決に取り組んでおります。しばらく時間をおいてからご覧ください。
          </Text>
          <Text>
            <span>
              ​​We apologize for the inconvenience.
              <br />
              ​We are working to resolve this issue so that it can be viewed normally. ​Please wait for a while and take
              a look.
            </span>
          </Text>
        </div>
      </Inner>
    </Wrapper>
  );
};

export default InternalServerError;
