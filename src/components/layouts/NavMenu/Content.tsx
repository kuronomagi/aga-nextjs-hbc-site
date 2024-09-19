'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// style
import * as LC from './style';

// module css
import styles from '~/app/styles/ui/nav/nav.menu.module.css';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import Image from 'next/image';

import {
  NAV_PC_HAIR_REMOVAL,
  NAV_PC_ORTHOMOLECULAR,
  NAV_PC_REGENERATIVE,
  NAV_SP_HAIR_REMOVAL,
  NAV_SP_ORTHOMOLECULAR,
  NAV_SP_REGENERATIVE,
} from '~/constants/images';
import { navPaths } from '~/constants/header';

// components

// types
interface P extends StyledSystemDefaultProps {
  containerStyleName?: string;
}

const menu = [
  {
    name: '分子整合栄養医学',
    label: 'Orthomolecular',
    url: '/',
    photo: {
      pc: NAV_PC_ORTHOMOLECULAR,
      sp: NAV_SP_ORTHOMOLECULAR,
    },
  },
  {
    name: '医療脱毛',
    label: 'Hair removal',
    url: '/',
    photo: {
      pc: NAV_PC_HAIR_REMOVAL,
      sp: NAV_SP_HAIR_REMOVAL,
    },
  },
  {
    name: 'フェイシャル',
    label: 'Facial',
    url: '/',
    photo: {
      pc: NAV_PC_REGENERATIVE,
      sp: NAV_SP_REGENERATIVE,
    },
  },
  {
    name: '再生医療',
    label: 'Regenerative',
    url: '/',
    photo: {
      pc: NAV_PC_REGENERATIVE,
      sp: NAV_SP_REGENERATIVE,
    },
  },
];

const NavMenu: React.FC<P> = ({ containerStyleName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
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
        <ul className={`${styles['list']}`}>
          {menu.map((nav, index) => {
            return (
              <li className={`${styles['list-item']} down-on-hover`} key={`${nav.label}-${index}`}>
                <a href={nav.url} className={`${styles['list-item-link']}`}>
                  <Image
                    src={nav.photo.pc}
                    width={250}
                    height={133}
                    className={`${styles['image']} ${styles['pc']}`}
                    alt={nav.name}
                  />
                  <Image
                    src={nav.photo.sp}
                    width={250}
                    height={133}
                    className={`${styles['image']} ${styles['sp']}`}
                    alt={nav.name}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </LC.Wrapper>
  );
};

export default NavMenu;
