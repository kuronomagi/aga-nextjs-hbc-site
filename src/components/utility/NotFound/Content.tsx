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

export interface NotFoundProps extends StyledSystemDefaultProps {}

/**
 * space: number | (number | string)[];
 * break point: mt={[1, 2]} => mt={[sp, tab]}
 */

export const NotFound: React.FC<NotFoundProps> = ({ mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <Suspense fallback={<div></div>}>
      <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} pt={pt} pr={pr} pb={pb} pl={pl}>
        <Inner>
          <TitleWrapper>
            <TitleH2>404</TitleH2>
            <TitleDescription>Not Found</TitleDescription>
          </TitleWrapper>

          <ContentWrapper>
            <TitleH3>閲覧できません。</TitleH3>

            <ContentInner>
              <Text>
                お探しのページは存在しないか、URLが変更されている可能性があります。
                <br />
                また、URLにタイプミスがないか再度ご確認ください。
              </Text>
              <Text>
                <span>I&apos;m sorry. Oops Request Not Found</span>
                <br />
                The page you are looking for does not exist or has been moved.
              </Text>

              <LinkButton mt={['40px']}>
                <Link href={'/'} className='prefetch passHref'>
                  <span className='link-button-text'>TOPへ戻る</span>
                </Link>
              </LinkButton>
            </ContentInner>
          </ContentWrapper>
        </Inner>
      </Wrapper>
    </Suspense>
  );
};

export default NotFound;
