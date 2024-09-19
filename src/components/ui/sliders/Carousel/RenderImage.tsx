'use client';

import React from 'react';
import Image from 'next/image';

const imageLoader = ({ src, width, quality }: any) => {
  return '';
  // return `${process.env.NEXT_PUBLIC_CLIENT_PATH}${src}?w=${width}&q=${quality || 75}`;
};

// https://placehold.jp/990x636.png
export function renderImage({
  imagePath,
  index,
  enablePriority = false,
  imageClassName = '',
  alt = '',
}: {
  imagePath: string;
  index: number;
  enablePriority?: boolean;
  imageClassName?: string;
  alt?: string;
}) {
  return (
    <div className='embla__slide' key={index}>
      {/* <NextImage imageClassName='embla__slide__img' image={imagePath} /> */}

      <div className='embla__slide__img'>
        <img src={imagePath} />
        {/* <Image
          width={900}
          height={300}
          // fill
          loader={imageLoader}
          priority={enablePriority}
          src={'https://img.freepik.com/free-photo/hot-coffee-cup-set-on-wooden-table_1150-10444.jpg'}
          // src='https://placehold.jp/990x636.png'
          className={imageClassName}
          alt={alt || ''}
        /> */}
      </div>
    </div>
  );
}
