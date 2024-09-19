'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// style
import * as LC from './style';

// module css
import styles from '~/app/styles/layout/tab.layout.module.css';

// lib
import { Desktop, Mobile } from '~/lib/react-responsive/component';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import TabHead from './TabHead';

// types
import { TabHeadDataType, TabSideNavDataType } from './types';
import TabSideNav from './TabSideNav';
import ScrollBarNav from './ScrollBarNav';

// components

// types
interface P extends StyledSystemDefaultProps {
  headData: TabHeadDataType;
  navData: TabSideNavDataType;
  currentTab: string;
  containerStyleName?: string;
}

const TabContent: React.FC<P> = ({
  headData,
  navData,
  currentTab,
  containerStyleName,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}) => {
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
      className={`${styles['tab-content-wrapper']} ${!!containerStyleName && containerStyleName}`}>
      <div className={styles['tab-content-inner']}>
        <TabHead data={headData} currentTab={currentTab} />

        <Desktop>
          <TabSideNav data={navData} />
        </Desktop>
      </div>
    </LC.Wrapper>
  );
};

export default TabContent;
