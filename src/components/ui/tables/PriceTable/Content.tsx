'use client';

// core
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// module css
import styles from '~/app/styles/ui/tables/price.table.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { Mobile } from '~/lib/react-responsive/component';

interface P extends StyledSystemDefaultProps {
  headLabelText?: string;
  headData: { text: string }[];
  bodyData: { text: string }[][];
  aboutData?: {
    photo: {
      path: string;
      width: number;
      height: number;
      alt: string;
    };
    title: string;
    text: string;
  };
  wrapperClassName?: string;
}

const PriceTable: React.FC<P> = ({
  headLabelText,
  headData,
  bodyData,
  aboutData,
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
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: any) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <LC.Wrapper
      className={`${styles['wrapper']} ${!!wrapperClassName ? styles[wrapperClassName] : ''}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={styles.inner}>
        {!!headLabelText && (
          <div className={`${styles['label-wrapper']} ${styles['first-cell']}`}>
            <p className={styles['label-text']}>{headLabelText}</p>
          </div>
        )}

        {!!aboutData && (
          <>
            <div className={styles['about-wrapper']}>
              <div className={styles['about-inner']}>
                <div className={styles['about-left-cell']}>
                  <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                    <Image
                      src={aboutData.photo.path}
                      width={aboutData.photo.width}
                      height={aboutData.photo.height}
                      alt={aboutData.photo.alt}
                      className={styles['about-image']}
                    />
                    <div className={styles['about-image-button-wrapper']}>
                      <p className={styles['about-image-button-text']} onClick={handleZoomChange}>
                        クリックして拡大
                      </p>
                    </div>
                  </ControlledZoom>
                </div>

                <div className={styles['about-right-cell']}>
                  <div className={styles['about-panel']}>
                    <p className={styles['about-title']}>{aboutData.title}</p>
                    <p className={styles['about-text']}>{aboutData.text}</p>
                  </div>
                </div>
              </div>{' '}
            </div>
          </>
        )}

        <div className={styles['price-table-wrapper']}>
          <table className={styles['price-table']}>
            <tr className={styles['price-table-head-item']}>
              {headData.length > 0 &&
                headData.map((v, i) => {
                  return (
                    <th
                      className={`${styles['price-table-head-text']} ${i == 0 ? styles['first-cell'] : ''}`}
                      key={`price-table-head-th-${i}`}>
                      {v.text}
                    </th>
                  );
                })}
            </tr>
            {bodyData.length > 0 &&
              bodyData.map((v, i) => {
                return (
                  <tr key={`price-table-body-tr`} className={styles['price-table-body-item']}>
                    {v.length > 0 &&
                      v.map((vv, ii) => {
                        return (
                          <td
                            key={`price-table-body-td`}
                            className={`${styles['price-table-body-text']} ${ii == 0 ? styles['first-cell'] : ''}`}>
                            {vv.text}
                          </td>
                        );
                      })}
                  </tr>
                );
              })}
          </table>

          <Mobile>
            <div style={{ width: 140, height: 1 }} />
          </Mobile>
        </div>
      </div>
    </LC.Wrapper>
  );
};

export default PriceTable;
