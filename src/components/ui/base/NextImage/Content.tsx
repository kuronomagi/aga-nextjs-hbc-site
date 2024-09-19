'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { Wrapper } from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  // staticImage: StaticImageData;
  image: StaticImageData;
  imageClassName?: string;
  className?: string;
  alt?: string;
  enablePriority?: boolean; // NOTE: 優先読み込み設定。(SSGでは next.config.js の unoptimized で遅延設定を有ににしています。)
}

const imageLoader = ({ src, width, quality }: any) => {
  return `${process.env.NEXT_PUBLIC_CLIENT_PATH}${src}?w=${width}&q=${quality || 75}`;
};

const NextImage: React.FC<P> = ({
  image,
  imageClassName,
  className,
  alt,
  enablePriority = false,
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
      <Image
        fill
        loader={imageLoader}
        priority={enablePriority}
        src={image}
        className={imageClassName}
        alt={alt || ''}
      />
      {/* <img src={staticImage.src} className={imageClassName} alt={alt || ''} /> */}
    </Wrapper>
  );
};

export default React.memo(NextImage);
