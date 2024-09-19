// core
// import Link from 'next/link';

// components

// types
import { StyledSystemDefaultProps } from '~/types/Common';

// module css
import styles from '~/app/styles/layout/tab.layout.module.css';

// type
import { TabNavDataType } from './types';
import { handleScroll } from '~/services/forms/scroll';

interface P extends StyledSystemDefaultProps {
  data: TabNavDataType;
}

const ScrollBarNav: React.FC<P> = ({ data }) => {
  function scrollTo(targetClassName: string) {
    handleScroll(targetClassName);
  }

  return (
    <div className={styles['scroll-var-nav']}>
      <div className={styles['scroll-var-nav-inner']}>
        <div className={styles['scroll-var-nav-body']}>
          {data.length > 0 && (
            <div className={styles['scroll-var-nav-wrapper']}>
              {data.map((v, index) => {
                return (
                  <div
                    onClick={() => handleScroll(v.label)}
                    key={`scroll-var-nav-nav-${index}`}
                    className={styles['scroll-var-nav-link']}>
                    <p className={styles['scroll-var-nav-link-text']}>{v.text}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ScrollBarNav;
