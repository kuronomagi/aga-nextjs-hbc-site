'use client';

// core
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// style
import * as LC from './style';

// module css
import styles from '~/app/styles/layout/footer.module.css';

// type
import { StyledSystemDefaultProps } from '~/types/Common';

// constants
import {
  HEADER_LOGO,
  SHOP_CARD_HAKATA,
  SHOP_CARD_HIMAWARI,
  SHOP_CARD_ROPPONMATSU,
  SHOP_CARD_TENJIN,
} from '~/constants/images';
import { hakataConfig, himawariConfig, ropponmatsuConfig, siteConfig, tenjinConfig } from '~/constants/site.config';
import { services } from '~/constants/medical.services';

// constants
import Space from '~/components/utility/Space';
import BusinessHourTable from '~/components/ui/tables/BusinessHourTable';

// types
interface P extends StyledSystemDefaultProps {
  containerStyleName?: string;
}

const Footer: React.FC<P> = ({ containerStyleName, mt, mr, mb, ml, pt, pr, pb, pl }) => {
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
      className={`${styles['wrapper']} ${!!containerStyleName && styles[containerStyleName]}`}>
      <div className={styles['inner']}>
        <div className={styles['head']}>
          <Link className={styles['head-link']} href='/' prefetch={true} style={{ display: 'inline-block' }}>
            <div className={styles['logo']} aria-label='HBC'>
              <Image src={HEADER_LOGO} width={191} height={55} alt='天神ホリスティックビューティークリニック' />
            </div>
          </Link>

          <Space mt={['15.5px']} />

          <div className={styles['head-text-wrap']}>
            <p className={styles['head-text']}>{`天神ホリスティックビューティー\nクリニックは`}</p>
            <Space mt={['10px', '10px']} />
            <p className={`${styles['head-text']} ${styles['green']}`}>
              <span className={`${styles['head-text-left']}`}>「</span>
              <span className={`${styles['head-text-center']}`}>分子整合栄養医学専門</span>
              <span className={`${styles['head-text-right']}`}>」</span>
            </p>
            <Space mt={['0px', '3px']} />
            <p className={styles['head-text']}>のクリニックです。</p>
          </div>
        </div>

        <Space mt={['50px', '60px']} />

        <div className={styles['middle']}>
          <div className={styles['middle-left-wrapper']}>
            <section>
              <h2 className={styles['h2']}>お問い合わせについて</h2>

              <Space mt={['10px', '15px']} />

              <div className={styles['table-column2-primary']}>
                <div className={styles['item']}>
                  <p className={styles['cell']}>TEL</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className={`${styles['cell']} ${styles['cell-text']} ${styles['tel']}`}>
                    {siteConfig.phoneText}
                  </a>
                </div>

                <div className={styles['item']}>
                  <p className={styles['cell']}>FAX</p>
                  <p className={`${styles['cell']} ${styles['cell-text']}`}>{siteConfig.faxText}</p>
                </div>
              </div>

              <Space mt={['10px', '15px']} />

              <div className={styles['caution-wrapper']}>
                <p className={styles['caution-text']}>※休診日：水曜・日曜</p>
              </div>
            </section>

            <Space mt={['28px']} />

            <section>
              <h2 className={styles['h2']}>診療時間</h2>

              <Space mt={['10px', '15px']} />

              <BusinessHourTable uiSizeName='small' />
            </section>
          </div>

          <div className={styles['middle-center-wrapper']}>
            <section>
              <h2 className={styles['h2']}>アクセスについて</h2>

              <Space mt={['10px', '15px']} />

              <div className={styles['content-panel-wrapper']}>
                <div className={styles['content-panel-inner']}>
                  <p className={styles['content-panel-title']}>地下鉄からのアクセス方法</p>
                  <Space mt={['3px', '5px']} />

                  <p className={styles['content-panel-text']}>・空港線 天神駅より徒歩6分</p>
                  <p className={styles['content-panel-text']}>・七隈線 天神南駅より徒歩7分</p>
                </div>
              </div>

              <Space mt={['10px']} />

              <div className={styles['content-panel-wrapper']}>
                <div className={styles['content-panel-inner']}>
                  <p className={styles['content-panel-title']}>西鉄からのアクセス方法</p>
                  <Space mt={['3px', '5px']} />

                  <p className={styles['content-panel-text']}>・天神大牟田線 西鉄福岡（天神）駅より徒歩4分</p>
                </div>
              </div>

              <Space mt={['20px']} />
              <div className={styles['content-map-wrapper']}>
                <iframe className={styles['content-map']} src={siteConfig.googleMapUrl} loading='lazy'></iframe>
              </div>

              <Space mt={['10px']} />

              <div className={styles['content-map-text-wrapper']}>
                <p className={styles['content-map-text']}>福岡市中央区大名1-14-45 QizTENJIN 3階</p>
              </div>
            </section>
          </div>
          {/* <div className={styles['middle-right-wrapper']}>
            <section>
              <h2 className={styles['h2']}>治療・サービス一覧</h2>

              <Space mt={['15px']} />

              {services.length > 0 && (
                <div className={`${styles['service-list-wrapper']}`}>
                  <ul className={styles['service-list']}>
                    {services.map((service, index) => {
                      return (
                        <li key={`service-list-item-${index}`} className={styles['service-list-item']}>
                          <Link href='' className={styles['service-list-link-text']}>
                            {service.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </section>
          </div> */}
        </div>

        {/* <div className={styles['bottom']}>
          <section>
            <h2 className={styles['h2']}>系列店舗一覧</h2>

            <Space mt={['15px']} />

            <div className={styles['shop-card-wrapper']}>
              <Link href={tenjinConfig.webUrl} target='_blank' className={styles['shop-card-link']}>
                <Image
                  className={`down-on-hover ${styles['shop-card-image']}`}
                  src={SHOP_CARD_TENJIN}
                  alt={tenjinConfig.name}
                  width={330}
                  height={83}
                />
              </Link>

              <Link href={ropponmatsuConfig.webUrl} target='_blank' className={styles['shop-card-link']}>
                <Image
                  className={`down-on-hover ${styles['shop-card-image']}`}
                  src={SHOP_CARD_ROPPONMATSU}
                  alt={ropponmatsuConfig.name}
                  width={330}
                  height={83}
                />
              </Link>

              <Link href={hakataConfig.webUrl} target='_blank' className={styles['shop-card-link']}>
                <Image
                  className={`down-on-hover ${styles['shop-card-image']}`}
                  src={SHOP_CARD_HAKATA}
                  alt={hakataConfig.name}
                  width={330}
                  height={83}
                />
              </Link>

              <Link href={himawariConfig.webUrl} target='_blank' className={styles['shop-card-link']}>
                <Image
                  className={`down-on-hover ${styles['shop-card-image']}`}
                  src={SHOP_CARD_HIMAWARI}
                  alt={himawariConfig.name}
                  width={330}
                  height={83}
                />
              </Link>
            </div>
          </section>
        </div> */}

        <Space mt={['47px']} />

        <div className={styles['copyright-wrapper']}>
          <p className={styles['copyright']}>© 2024 天神ホリスティックビューティークリニック</p>
        </div>
      </div>
    </LC.Wrapper>
  );
};

export default Footer;
