'use client';

// core
import React, { useEffect, useState } from 'react';

// module css
import styles from '~/app/styles/ui/panel/left.photo.profile.panel.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import Image from 'next/image';
import { Desktop, Mobile } from '~/lib/react-responsive/component';
import Link from 'next/link';

interface P extends StyledSystemDefaultProps {
  photo: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  fullName: {
    first_name: string;
    last_name: string;
    first_name_ruby: string;
    last_name_ruby: string;
  };
  afterNameText?: string;
  data: {
    text: string;
  }[];
  bottomChildren?: React.ReactNode;
  wrapperClassName?: string;
  flexClassName?: string;
}

const LeftPhotoProfilePanel: React.FC<P> = ({
  photo,
  fullName,
  afterNameText,
  data,
  bottomChildren,
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
          <div className={styles['column']}>
            <div className={styles['left-col']}>
              <Image
                className={styles.image}
                src={photo.url}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
              />
            </div>

            <div className={styles['right-col']}>
              <div className={`${styles['name-wrapper']}`}>
                <div className={`${styles['name-cell1']}`}>
                  <p className={`${styles['ruby-text']}`}>{fullName.last_name_ruby}</p>
                  <p className={`${styles['title-text']}`}>{fullName.last_name}</p>
                </div>

                <div className={`${styles['name-cell2']}`}>
                  <p className={`${styles['ruby-text']}`}>{fullName.first_name_ruby}</p>
                  <p className={`${styles['title-text']}`}>{fullName.first_name}</p>
                </div>

                <div className={`${styles['name-cell3']}`}>
                  <p className={`${styles['title-text']} ${styles['after-name-text']}`}>{afterNameText}</p>
                </div>
              </div>

              {!!data && (
                <ul className={styles['history-list']}>
                  {data.map((v, i) => {
                    return (
                      <li className={styles['history-list-item']} key={`left-photo-profile-panel-${i}`}>
                        {v.text}
                      </li>
                    );
                  })}
                </ul>
              )}

              {!!bottomChildren && <>{bottomChildren}</>}
            </div>
          </div>
        </div>
      </LC.Wrapper>
    </>
  );
};

export default LeftPhotoProfilePanel;
