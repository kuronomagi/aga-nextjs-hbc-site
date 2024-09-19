'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/panel/skeleton.panel.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  children: React.ReactNode;
  wrapperClassName?: string;
  flexClassName?: string;
}

const SkeletonPanel: React.FC<P> = ({
  children,
  wrapperClassName,
  flexClassName = 'flex align-items-center flex-direction-column',
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
    <>
      <LC.Wrapper
        className={`${styles['wrapper']} ${wrapperClassName}`}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        pt={pt}
        pr={pr}
        pb={pb}
        pl={pl}>
        <div className={`${styles['inner']} ${flexClassName}`}>
          <>{children}</>
        </div>
      </LC.Wrapper>
    </>
  );
};

export default SkeletonPanel;
