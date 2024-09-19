// components

// types
import { StyledSystemDefaultProps } from '~/types/Common';

// module css
import styles from '~/app/styles/layout/tab.layout.module.css';

// type
import { TabHeadDataType } from './types';
import Link from 'next/link';

interface P extends StyledSystemDefaultProps {
  data: TabHeadDataType;
  currentTab: string;
}

const TabHead: React.FC<P> = ({ data, currentTab }) => {
  return (
    <div className={styles['tab-head-wrapper']}>
      <div className={styles['tab-head-inner']}>
        <div className={styles['tab-head']}>
          {data.length > 0 &&
            data.map((v, index) => {
              return (
                <Link
                  prefetch
                  href={v.linkPath || '/'}
                  className={`${styles['tab-head-item']} ${currentTab == v.label ? styles['is-current'] : ''}`}
                  key={`tab-head-item-${index}`}>
                  <p className={styles['tab-head-text']}>{v.text}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default TabHead;
