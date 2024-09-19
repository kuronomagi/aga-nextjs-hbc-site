'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// module css
import styles from '~/app/styles/ui/tables/inquiry.table.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { siteConfig } from '~/constants/site.config';

interface P extends StyledSystemDefaultProps {
  wrapperClassName?: string;
  labelClassName?: string;
}

const InquiryTable: React.FC<P> = ({ wrapperClassName, labelClassName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
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
      <div className={styles.inner}>
        <table className={styles['inquiry-table']}>
          <tr>
            <th style={{ borderTopLeftRadius: 10 }}>TEL</th>
            <td style={{ borderTopRightRadius: 10 }} className={styles['tel']}>
              <a className={styles.link} href={`tel:${siteConfig.phone}`}>
                {siteConfig.phoneText}
              </a>
            </td>
          </tr>

          <tr>
            <th className={styles['time-column']}>FAX</th>
            <td>{siteConfig.faxText}</td>
          </tr>

          <tr>
            <th style={{ borderBottomLeftRadius: 10 }} className={styles['time-column']}>
              Mail
            </th>

            <td style={{ borderBottomRightRadius: 10 }}>{siteConfig.email}</td>
          </tr>
        </table>
      </div>
    </LC.Wrapper>
  );
};

export default InquiryTable;
