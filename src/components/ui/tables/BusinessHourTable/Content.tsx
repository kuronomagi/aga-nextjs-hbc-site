'use client';

// core
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// module css
import styles from '~/app/styles/ui/tables/business.hour.table.module.css';

// styles
import * as LC from './style';

// types
import { StyledSystemDefaultProps } from '~/types/Common';
import { Clock } from '../../svg/decorations/clock';

interface P extends StyledSystemDefaultProps {
  wrapperClassName?: string;
  uiSizeName?: string;
}

const BusinessHourTable: React.FC<P> = ({ wrapperClassName, uiSizeName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
  return (
    <LC.Wrapper
      className={`${styles['wrapper']} ${!!wrapperClassName ? styles[wrapperClassName] : ''} ${!!uiSizeName ? styles[uiSizeName] : ''}`}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}>
      <div className={styles.inner}>
        <table className={styles['schedule-table']}>
          <tr>
            <th className={styles['icon-wrapper']}>
              <span className={styles['icon']}>
                <Clock />
              </span>
            </th>
            <th className={styles['weekdays']}>月・火・木・金</th>
            <th className={styles['weekends']}>土・祝日</th>
          </tr>
          <tr>
            <td className={styles['time-column']}>午前</td>
            <td>10:00 – 13:00</td>
            <td>10:00 – 12:30</td>
          </tr>
          <tr>
            <td className={styles['time-column']}>午後</td>
            <td>15:00 – 19:00</td>
            <td className={styles['time-text-column']}>14:00 – 17:30</td>
          </tr>
        </table>
      </div>
    </LC.Wrapper>
  );
};

export default BusinessHourTable;
