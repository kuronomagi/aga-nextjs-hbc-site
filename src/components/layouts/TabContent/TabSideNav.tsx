// components

// types
import { StyledSystemDefaultProps } from '~/types/Common';

// module css
import styles from '~/app/styles/layout/tab.layout.module.css';

// type
import { TabSideNavDataType } from './types';
import { RightYagirushi } from '~/components/ui/svg/decorations/right.yagirushi';

// services
import { handleScroll } from '~/services/forms/scroll';

interface P extends StyledSystemDefaultProps {
  data: TabSideNavDataType;
}

const TabSideNav: React.FC<P> = ({ data }) => {
  return (
    <div className={styles['tab-side-menu']}>
      <div className={styles['tab-side-menu-inner']}>
        <div className={styles['tab-side-menu-head']}>
          <p className={styles['tab-side-menu-title']}>{data.title}</p>
        </div>

        <div className={styles['tab-side-menu-body']}>
          {data.nav.length > 0 && (
            <div className={styles['tab-side-menu-wrapper']}>
              {data.nav.map((v, index) => {
                return (
                  <div
                    onClick={() => handleScroll(v.label)}
                    key={`tab-side-menu-nav-${index}`}
                    className={styles['tab-side-menu-link']}>
                    <div className={styles['tab-side-menu-nav-arrow']}>
                      <RightYagirushi />
                    </div>
                    <p className={styles['tab-side-menu-link-text']}>{v.text}</p>
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
export default TabSideNav;
