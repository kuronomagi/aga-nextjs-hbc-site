'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// style
import * as LC from './style';

// module css
import styles from '~/app/styles/layout/blog.panel.module.css';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import H2Title from '~/components/ui/title/H2Title';

// components

// types
interface P extends StyledSystemDefaultProps {
  containerStyleName?: string;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
}

const BlogPanel: React.FC<P> = ({
  containerStyleName,
  leftChildren,
  rightChildren,
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
      className={`${styles['wrapper']} ${!!containerStyleName && containerStyleName}`}>
      <div className={styles['inner']}>
        <div className={styles['left-cell']}>{!!leftChildren && leftChildren}</div>
        <div className={styles['right-cell']}>{!!rightChildren && rightChildren}</div>
      </div>
    </LC.Wrapper>
  );
};

export default BlogPanel;
