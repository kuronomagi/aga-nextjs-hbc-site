'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { Container, InnerContainer, Wrapper } from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  // staticImage: StaticImageData;
  // image: StaticImageData;
  // imageClassName?: string;
  className?: string;
  enablePriority?: boolean; // NOTE: 優先読み込み設定。(SSGでは next.config.js の unoptimized で遅延設定を有ににしています。)

  alignItems?: string;
  children?: string;
  imgalt?: string;
  imgsrc: string;
  height?: string | number;
  justifyContent?: string;
}

const imageLoader = ({ src, width, quality }: any) => {
  return `${process.env.NEXT_PUBLIC_CLIENT_PATH}${src}?w=${width}&q=${quality || 75}`;
};

const NextBgImage: React.FC<P> = ({
  className,
  enablePriority,
  children,
  imgalt = '',
  imgsrc,
  justifyContent = 'flex-start',
  width = '100%',
  height = '100%',
  mt,
  mb,
  mr,
  ml,
  pt,
  pb,
  pr,
  pl,
}) => {
  return (
    <Wrapper className={`base-next-image ${className}`} mt={mt} mb={mb} mr={mr} ml={ml} pt={pt} pb={pb} pr={pr} pl={pl}>
      <Container height={height} width={width}>
        <Image
          fill
          alt={imgalt}
          src={imgsrc}
          // layout='fill'
          // objectFit='cover'
          quality={80}
          loader={imageLoader}
          priority={enablePriority}
        />
        {children && <InnerContainer>{children}</InnerContainer>}
      </Container>
    </Wrapper>
  );
};

export default React.memo(NextBgImage);
