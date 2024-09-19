import React, { useCallback, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

import { useTransition, animated, config } from 'react-spring';

import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { isBlank } from '~/services/checkBlank';

// components
import NextImage from '~/components/ui/base/NextImage';
import dynamic from 'next/dynamic';
import { LPPhotos } from '~/constants/images';
import NextBgImage from '~/components/ui/base/NextBgImage';

export interface CustomProps extends StyledSystemDefaultProps {
  slides?: { id: number; url: string; alt: string }[];
  wrapperClassName?: string;
}

const SLIDES_COUNT = 2;
const INTERVAL_TIME = 1500;

// NOTE: ここを変更する時はアニメーションのフェード動作チェックをすること
const tenjinSlides: any = [
  { id: 0, url: LPPhotos.mainPhoto001.src, alt: '' },
  { id: 1, url: LPPhotos.mainPhoto002.src, alt: '' },
];

export const MainPhotoFadeCarousel: React.FC<CustomProps> = ({
  slides = tenjinSlides,
  wrapperClassName,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}) => {
  const [index, setIndex] = useState(0);
  const [changedSlideCount, setChangedSlideCount] = useState(1);

  const transitions = useTransition(slides[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: config.molasses,
    keys: item => item.id,
  });

  useEffect(() => {
    setTimeout(() => {
      setChangedSlideCount(2);
    }, 3000);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex(state => (state + 1) % SLIDES_COUNT),
      INTERVAL_TIME * changedSlideCount,
    );
    return () => clearInterval(interval); // ここでsetIntervalをクリアします
  }, [changedSlideCount]);

  return (
    // <Loader />
    <LC.WrapperContainer>
      <LC.Wrapper
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        pt={pt}
        pr={pr}
        pb={pb}
        pl={pl}
        data-testid='wrapper'
        className={`c-main-photo-carousel ${wrapperClassName}`}>
        {transitions((props, item, state, key) => (
          // <animated.div key={key} className='bg' style={{ ...props, backgroundImage: `url(${item.url})` }} />
          <animated.div key={key} className='bg' style={{ ...props }}>
            <NextBgImage imgsrc={item.url} imgalt={item.alt} enablePriority={true} />
            {/* <div className='bg' style={{ backgroundImage: `url(${item.url})` }}></div> */}
          </animated.div>
        ))}
      </LC.Wrapper>

      <div className='c-main-photo-bottom-texts'>
        {/* <div className={'c-main-photo-bottom-texts-bg-image-wrapper'}>
          <div
            className='c-main-photo-bottom-texts-bg-image'
            style={{ backgroundImage: `url(${LPPhotos.topTexts})` }}></div>
        </div> */}

        <NextImage image={LPPhotos.topTexts} className='c-main-photo-bottom-texts-image' />

        {/* <img src={LPPhotos.topTexts.src} alt='' className='c-main-photo-bottom-texts-image' /> */}
      </div>
    </LC.WrapperContainer>
  );
};

export default React.memo(MainPhotoFadeCarousel);

// export const DynamicMainPhotoFadeCarousel = dynamic(
//   () => import('~/features/counseling_lp/components/MainPhotoFadeCarousel'),
//   {
//     loading: () => (
//       <>
//         <Loader />
//         {/* <p>Loading...</p> */}
//       </>
//     ),
//   },
// );

const Loader = () => (
  <LC.Wrapper>
    <ContentLoader
      speed={2}
      width={'100%'}
      height={460}
      // viewBox='0 0 400 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <rect x='0' y='0' rx='2' ry='2' width='100%' height='546' />
    </ContentLoader>
  </LC.Wrapper>
);
