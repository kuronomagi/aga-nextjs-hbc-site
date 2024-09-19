'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  photos: {
    url: string;
  }[];
};

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options, photos } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: false, delay: 3000 })]);
  const [isPlaying, setIsPlaying] = useState(false);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay: any = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop: any = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay: any = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop: any = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay: any = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    !!emblaApi &&
      emblaApi
        // .on('autoplay:play', () => setIsPlaying(true))
        // .on('autoplay:stop', () => setIsPlaying(false))
        .on('reInit', () => setIsPlaying(false));
  }, [emblaApi]);

  return (
    <div className='custom custom-key-visual-slide embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {photos.map((photo, index) => (
            <div className='embla__slide' key={`${photo.url}-${index}`}>
              <div className='embla__slide__number'>
                <div>
                  <img src={photo.url} alt='' />
                </div>
                {/* {index + 1 == 1 && <img src='https://placehold.jp/990x636.png' alt='' />}
                {index + 1 == 2 && (
                  <img
                    src='https://img.freepik.com/free-photo/hot-coffee-cup-set-on-wooden-table_1150-10444.jpg'
                    alt=''
                  />
                )}
                {index + 1 == 3 && <img src='https://placehold.jp/990x636.png' alt='' />}
                {index + 1 == 4 && (
                  <img
                    src='https://img.freepik.com/free-photo/hot-coffee-cup-set-on-wooden-table_1150-10444.jpg'
                    alt=''
                  />
                )}
                {index + 1 == 5 && <img src='https://placehold.jp/990x636.png' alt='' />} */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={() => onButtonAutoplayClick(onPrevButtonClick)} disabled={prevBtnDisabled} />
          <NextButton onClick={() => onButtonAutoplayClick(onNextButtonClick)} disabled={nextBtnDisabled} />
        </div>

        <button className='embla__play' onClick={toggleAutoplay} type='button'>
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div> */}
    </div>
  );
};

export default EmblaCarousel;
