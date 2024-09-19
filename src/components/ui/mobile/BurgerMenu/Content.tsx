'use client';

// core
import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Image from 'next/image';

// module css
import styles from '~/app/styles/ui/mobile/burger.menu.module.css';
import uiStyles from '~/app/styles/ui/mobile/burger.menu.ui.module.css';

// styles
import * as LC from './style';

// constants
import { pagePaths } from '~/constants/paths';
import { siteConfig } from '~/constants/site.config';
import { services } from '~/constants/medical.services';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { style } from 'styled-system';

// ui
import Space from '~/components/utility/Space';
import BusinessHourTable from '../../tables/BusinessHourTable';
import Link from 'next/link';
import {
  NAV_SP_MENU_BG_WHITE_ORTHOMOLECULAR,
  NAV_SP_MENU_BG_WHITE_HAIR_REMOVAL,
  NAV_SP_MENU_BG_WHITE_FACIAL,
  NAV_SP_MENU_BG_WHITE_REGENERATIVE,
  BANNER_2407_001,
} from '~/constants/images';

interface P extends StyledSystemDefaultProps {
  isOpen: boolean;
  toggleMenu: () => void;
  wrapperClassName?: string;
}

const BurgerMenu: React.FC<P> = ({ isOpen, toggleMenu, wrapperClassName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
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
      <div className='burger-menu'>
        <animated.div
          className={`${styles['menu-contents']} ${isOpen ? styles['open'] : ''}`}
          style={
            {
              // ...style,
            }
          }>
          <Space mt={['40px']} />

          <div className={uiStyles['head-wrapper']}>
            <div className={uiStyles['burger-photo-menus-wrapper']}>
              <div className={uiStyles['burger-photo-menus-inner']}>
                <Link href='' className={uiStyles['burger-photo-menus-link']}>
                  <Image
                    className={uiStyles['burger-photo-menus-image']}
                    src={NAV_SP_MENU_BG_WHITE_ORTHOMOLECULAR}
                    width={340}
                    height={170}
                    alt='分子整合栄養医学'
                  />
                </Link>
                <Link href='' className={uiStyles['burger-photo-menus-link']}>
                  <Image
                    className={uiStyles['burger-photo-menus-image']}
                    src={NAV_SP_MENU_BG_WHITE_HAIR_REMOVAL}
                    width={340}
                    height={170}
                    alt='医療脱毛'
                  />
                </Link>
                <Link href='' className={uiStyles['burger-photo-menus-link']}>
                  <Image
                    className={uiStyles['burger-photo-menus-image']}
                    src={NAV_SP_MENU_BG_WHITE_FACIAL}
                    width={340}
                    height={170}
                    alt=''
                  />
                </Link>
                <Link href='' className={uiStyles['burger-photo-menus-link']}>
                  <Image
                    className={uiStyles['burger-photo-menus-image']}
                    src={NAV_SP_MENU_BG_WHITE_REGENERATIVE}
                    width={340}
                    height={170}
                    alt=''
                  />
                </Link>
              </div>
            </div>

            <Space mt={['28px']} />

            <section>
              <h2 className={uiStyles['h2']}>お問い合わせについて</h2>

              <Space mt={['10px', '15px']} />

              <div className={uiStyles['burger-table-column2-primary']}>
                <div className={uiStyles['item']}>
                  <p className={uiStyles['cell']}>TEL</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className={`${uiStyles['cell']} ${uiStyles['cell-text']} ${uiStyles['tel']}`}>
                    {siteConfig.phoneText}
                  </a>
                </div>

                <div className={uiStyles['item']}>
                  <p className={uiStyles['cell']}>FAX</p>
                  <p className={`${uiStyles['cell']} ${uiStyles['cell-text']}`}>{siteConfig.faxText}</p>
                </div>
              </div>
            </section>

            <Space mt={['28px']} />

            <div className={uiStyles['banner-wrapper']}>
              <Link href='' className={uiStyles['banner-link']}>
                <Image
                  src={BANNER_2407_001}
                  width={350}
                  height={105}
                  alt='栄養学セミナー情報'
                  className={uiStyles['banner-image']}
                />
              </Link>
            </div>

            <Space mt={['28px']} />

            <section>
              <h2 className={uiStyles['h2']}>診療時間</h2>

              <Space mt={['10px', '15px']} />

              <BusinessHourTable uiSizeName='small' />

              <Space mt={['10px', '15px']} />

              <div className={uiStyles['burger-caution-wrapper']}>
                <p className={uiStyles['burger-caution-text']}>※休診日：水曜・日曜</p>
              </div>
            </section>
          </div>

          <Space mt={['31px']} />

          <div className={uiStyles['middle-wrapper']}>
            <section>
              <h2 className={uiStyles['h2']}>アクセスについて</h2>

              <Space mt={['10px', '15px']} />

              <div className={uiStyles['burger-content-panel-wrapper']}>
                <div className={uiStyles['burger-content-panel-inner']}>
                  <div className={uiStyles['burger-content-panel-head']}>
                    <p className={uiStyles['burger-content-panel-title']}>地下鉄からのアクセス方法</p>
                  </div>

                  <div className={uiStyles['burger-content-panel-body']}>
                    <p className={uiStyles['burger-content-panel-text']}>・空港線 天神駅より徒歩6分</p>
                    <p className={uiStyles['burger-content-panel-text']}>・七隈線 天神南駅より徒歩7分</p>
                  </div>
                </div>
              </div>

              <Space mt={['10px']} />

              <div className={uiStyles['burger-content-panel-wrapper']}>
                <div className={uiStyles['burger-content-panel-inner']}>
                  <div className={uiStyles['burger-content-panel-head']}>
                    <p className={uiStyles['burger-content-panel-title']}>西鉄からのアクセス方法</p>
                  </div>

                  <div className={uiStyles['burger-content-panel-body']}>
                    <p className={uiStyles['burger-content-panel-text']}>
                      ・天神大牟田線 西鉄福岡（天神）駅より徒歩4分
                    </p>
                  </div>
                </div>
              </div>

              <Space mt={['50px']} />

              <div className={uiStyles['burger-content-map-wrapper']}>
                <iframe
                  className={uiStyles['burger-content-map']}
                  src={siteConfig.googleMapUrl}
                  loading='lazy'></iframe>
              </div>

              <Space mt={['10px']} />

              <div className={uiStyles['burger-content-map-text-wrapper']}>
                <p className={uiStyles['burger-content-map-text']}>福岡市中央区大名1-14-45 QizTENJIN 3階</p>
              </div>
            </section>
          </div>

          <Space mt={['28px', '35px']} />

          <div className='flex flex-direction'>
            <p className='text-opacity-white font-size-12'>&#169; 2024 天神ホリスティックビューティークリニック</p>
          </div>
        </animated.div>
      </div>
    </LC.Wrapper>
  );
};

export default BurgerMenu;
