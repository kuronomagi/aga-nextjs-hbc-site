'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// style
import * as LC from './style';

// module css
import pcStyles from '~/app/styles/ui/header/pc.header.module.css';
import tabStyles from '~/app/styles/ui/header/tab.header.module.css';
import spStyles from '~/app/styles/ui/header/sp.header.module.css';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import Image from 'next/image';
import { HEADER_LOGO } from '~/constants/images';
import { navPaths } from '~/constants/header';
import { RadiusDashed } from '~/components/ui/svg/decorations/radius.dashed';
import { Desktop, Mobile, Tablet } from '~/lib/react-responsive/component';
import BurgerMenu from '~/components/ui/mobile/BurgerMenu';

// components

// types
interface P extends StyledSystemDefaultProps {
  containerStyleName?: string;
}

const Header: React.FC<P> = ({ containerStyleName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let timeoutId: any = null;

    const handleScroll = () => {
      // console.log('=== handleScroll ===');
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        if (!isOpen) {
          setScrollPosition(window.pageYOffset);
        }
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    if (!isOpen) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <Desktop>
        <LC.Wrapper
          mt={mt}
          mr={mr}
          mb={mb}
          ml={ml}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
          className={`${pcStyles['wrapper']} ${!!containerStyleName && containerStyleName} js-header`}>
          <div className={pcStyles['inner']}>
            <div className={pcStyles['left-cell']}>
              <Link href='/' prefetch={true} style={{ display: 'inline-block' }}>
                <div className={pcStyles['logo']} aria-label='HBC'>
                  <Image src={HEADER_LOGO} width={191} height={55} alt='天神ホリスティックビューティークリニック' />
                </div>
              </Link>
            </div>

            <ul className={`${pcStyles['right-cell']} ${pcStyles['nav-list']}`}>
              {navPaths.map((nav, index) => {
                return (
                  <li className={pcStyles['nav-list-item']} key={`${nav.label}-${index}`}>
                    <a href={nav.path} className={pcStyles['nav-list-item-link']}>
                      <span className={pcStyles['nav-label']}>{nav.label}</span>
                      <span className={pcStyles['nav-text']}>{nav.text}</span>
                    </a>
                    <span className={pcStyles['nav-list-item-dashed-svg']}>
                      <RadiusDashed />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </LC.Wrapper>
      </Desktop>

      <Tablet>
        <LC.Wrapper
          mt={mt}
          mr={mr}
          mb={mb}
          ml={ml}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
          className={`${tabStyles['wrapper']} ${!!containerStyleName && containerStyleName}`}>
          <div className={tabStyles['inner']}>
            <div className={tabStyles['left-cell']}>
              <Link href='/' prefetch={true} style={{ display: 'inline-block' }}>
                <div className={tabStyles['logo']} aria-label='HBC'>
                  <Image src={HEADER_LOGO} width={191} height={55} alt='天神ホリスティックビューティークリニック' />
                </div>
              </Link>
            </div>

            <ul className={`${tabStyles['right-cell']} ${tabStyles['nav-list']}`}>
              {navPaths.map((nav, index) => {
                return (
                  <li className={tabStyles['nav-list-item']} key={`${nav.label}-${index}`}>
                    <a href={nav.path} className={tabStyles['nav-list-item-link']}>
                      <span className={tabStyles['nav-label']}>{nav.label}</span>
                      <span className={tabStyles['nav-text']}>{nav.text}</span>
                    </a>
                    <span className={tabStyles['nav-list-item-dashed-svg']}>
                      <RadiusDashed />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </LC.Wrapper>
      </Tablet>

      <Mobile>
        <LC.Wrapper
          mt={mt}
          mr={mr}
          mb={mb}
          ml={ml}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
          className={`${spStyles['wrapper']} ${!!containerStyleName && containerStyleName}`}>
          <div className={spStyles['inner']}>
            <div className={spStyles['left-cell']}>
              <Link href='/' prefetch={true} className={spStyles['logo-link']}>
                <div className={spStyles['logo-wrapper']} aria-label='HBC'>
                  <Image
                    src={HEADER_LOGO}
                    width={191}
                    height={55}
                    alt='天神ホリスティックビューティークリニック'
                    className={spStyles['logo']}
                  />
                </div>
              </Link>
            </div>

            <div className={spStyles['right-cell']}>
              <div onClick={toggleMenu} className={spStyles['menu-button']}>
                <div className={`${spStyles['burger-menu']} ${isOpen ? spStyles['open'] : ''}`} onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </LC.Wrapper>

        <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </Mobile>
    </>
  );
};

export default Header;
