'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// style
import * as LC from './style';

// module css
import styles from '~/app/styles/ui/nav/nav.menu.module.css';
import tabStyles from '~/app/styles/layout/tab.layout.module.css';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { PRICE_TAB_LIST } from '~/constants/nav';
import RoundedTextButton from '~/components/ui/buttons/RoundedTextButton';

// components

// types
interface P extends StyledSystemDefaultProps {
  onClickTab: (v: string) => void;
  currantTab: string;
  containerStyleName?: string;
}

const PriceNav: React.FC<P> = ({ onClickTab, currantTab, containerStyleName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <LC.Wrapper
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      className={`${styles['wrapper']} ${!!containerStyleName && containerStyleName}`}>
      {PRICE_TAB_LIST.length > 0 && (
        <>
          <div className={tabStyles['buttons-wrapper-outer']}>
            <div className={tabStyles['buttons-wrapper']}>
              {PRICE_TAB_LIST.map((v, index) => {
                return (
                  <div key={`tab-list-item-${index}`} onClick={() => onClickTab(v.label)}>
                    <RoundedTextButton
                      text={v.text}
                      linkPath={v.path}
                      layoutClassName={currantTab == v.label ? 'current' : ''}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </LC.Wrapper>
  );
};

export default PriceNav;
