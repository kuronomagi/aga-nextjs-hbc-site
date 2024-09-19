'use client';

// core
import { useRef, useEffect, Suspense, useState, useCallback, useLayoutEffect } from 'react';
import Image from 'next/image';
import 'react-medium-image-zoom/dist/styles.css';

// module css
import styles from '~/app/styles/articles/article.module.css';

// hooks
import { useRouterHook } from '~/hooks/router/use.router.hook';

// services
import { handleTopPage } from '~/services/scrolls/scroll.top';

// components

import ScrollTopButton from '~/components/ui/buttons/ScrollTopButton';
import Space from '~/components/utility/Space';
import { Desktop, Mobile } from '~/lib/react-responsive/component';
import { EmblaOptionsType } from 'embla-carousel';
import MainPhotoFadeCarousel from '~/components/ui/MainPhotoFadeCarousel';
import RoundedWithArrowButton from '~/components/ui/buttons/RoundedWithArrowButton';
import { LPPhotos } from '~/constants/images';
import Footer from '~/components/layouts/Footer';

const myEnv = process.env.NEXT_PUBLIC_MY_ENV;
const OPTIONS: EmblaOptionsType = { align: 'center', dragFree: false, containScroll: 'trimSnaps' };

const femaleA001 = [
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-001-1-before.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 01 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-001-1-after.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 01 施術後',
      },
    },
  },
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-001-2-before.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 02 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-001-2-after.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 02 施術後',
      },
    },
  },
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-001-3-before.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 03 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-001-3-after.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 03 施術後',
      },
    },
  },
];

const femaleB001 = [
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-002-1-before.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 01 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-002-1-after.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 01 施術後',
      },
    },
  },
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-002-2-before.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 02 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-002-2-after.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 02 施術後',
      },
    },
  },
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-002-3-before.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 03 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/female-002-3-after.webp',
        width: 341.5,
        height: 507,
        alt: '女性A 03 施術後',
      },
    },
  },
];

const maleB001 = [
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/male-001-1-before.webp',
        width: 341.5,
        height: 507,
        alt: '男性A 01 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/male-001-1-after.webp',
        width: 341.5,
        height: 507,
        alt: '男性A 01 施術後',
      },
    },
  },
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/male-001-2-before.webp',
        width: 341.5,
        height: 507,
        alt: '男性A 02 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/male-001-2-after.webp',
        width: 341.5,
        height: 507,
        alt: '男性A 02 施術後',
      },
    },
  },
  {
    before: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/male-001-3-before.webp',
        width: 341.5,
        height: 507,
        alt: '男性A 03 施術前',
      },
    },
    after: {
      photo: {
        url: 'https://d2p6hnhjswvy7k.cloudfront.net/share/articles/hair-regrowth/male-001-3-after.webp',
        width: 341.5,
        height: 507,
        alt: '男性A 03 施術後',
      },
    },
  },
];
const Detail = ({ params }: { params: { slug: string; referer?: string | null | undefined } }) => {
  const { pathname } = useRouterHook();

  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: any) => {
    setIsZoomed(shouldZoom);
  }, []);

  const CustomZoomContent = ({
    buttonUnzoom, // default unzoom button
    modalState, // current state of the zoom modal: UNLOADED, LOADING, LOADED, UNLOADING
    img, // your image, prepped for zooming
    //onUnzoom,   // unused here, but a callback to manually unzoom the image and
    //   close the modal if you want to use your own buttons or
    //   listeners in your custom experience
  }: any) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useLayoutEffect(() => {
      if (modalState === 'LOADED') {
        setIsLoaded(true);
      } else if (modalState === 'UNLOADING') {
        setIsLoaded(false);
      }
    }, [modalState]);

    const classCaption = isLoaded ? 'zoom-caption zoom-caption--loaded' : 'zoom-caption';

    return (
      <>
        {buttonUnzoom}

        <figure>
          {img}
          <figcaption className={classCaption}>
            That Wanaka Tree, also known as the Wanaka Willow, is a willow tree located at the southern end of Lake
            Wānaka in the Otago region of New Zealand.
            <cite className='zoom-caption-cite'>
              Wikipedia,{' '}
              <a className='zoom-caption-link' href='https://en.wikipedia.org/wiki/That_Wanaka_Tree'>
                That Wanaka Tree
              </a>
            </cite>
          </figcaption>
        </figure>
      </>
    );
  };

  return (
    <article className={`${styles.article}`}>
      <div className={`${styles['article-inner']}`}>
        <section>
          <MainPhotoFadeCarousel />

          <Space mt={['30px', '65px', '100px']} />

          <section className={styles['contents-inner']}>
            <div className={styles['panel']}>
              <div className={styles['panel-inner']}>
                <div className={styles['panel-title-wrapper']}>
                  <h2 className={styles['panel-title']}>
                    <span className={styles['panel-title-red']}>薄毛</span>
                    <span className={styles['panel-title-black']}>の</span>
                    <span className={styles['panel-title-red']}>進行</span>
                    <span className={styles['panel-title-black']}>に</span>
                    <span className={styles['panel-title-red']}>徹底アプローチ</span>
                  </h2>
                </div>
                <Space mt={['20px', '25px']} />

                <p className={styles['panel-text']}>
                  医学的根拠で発毛を多くの方が実感しているAGA治療は当院におまかせください。
                  <br />
                  <br />
                  当院は、注射治療と内服薬で薄毛の原因に直接治療を行います。
                </p>

                <div>
                  <div className={styles['panel-photo-column2']}>
                    <div className={styles['panel-photo-column2-cell']}>
                      <div className={styles['panel-photo-column2-image-wrapper']}>
                        <Image
                          src={femaleA001[femaleA001.length - 1].before?.photo.url || ''}
                          width={femaleA001[femaleA001.length - 1].before?.photo.width}
                          height={femaleA001[femaleA001.length - 1].before?.photo.height}
                          alt={femaleA001[femaleA001.length - 1].before?.photo.alt || ''}
                          className={styles['panel-photo-column2-image']}
                        />
                        <p className={`${styles['panel-photo-column2-image-label']} ${styles['gray']}`}>施術前</p>
                      </div>
                    </div>

                    <div className={styles['panel-photo-column2-cell']}>
                      <div className={styles['panel-photo-column2-image-wrapper']}>
                        <Image
                          src={femaleA001[femaleA001.length - 1].after?.photo.url || ''}
                          width={femaleA001[femaleA001.length - 1].after?.photo.width}
                          height={femaleA001[femaleA001.length - 1].after?.photo.height}
                          alt={femaleA001[femaleA001.length - 1].after?.photo.alt || ''}
                          className={styles['panel-photo-column2-image']}
                        />
                        <p className={`${styles['panel-photo-column2-image-label']} ${styles['red']}`}>施術後</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={styles['panel-photo-column2']}>
                    <div className={styles['panel-photo-column2-cell']}>
                      <div className={styles['panel-photo-column2-image-wrapper']}>
                        <Image
                          src={femaleB001[femaleB001.length - 1].before?.photo.url || ''}
                          width={femaleB001[femaleB001.length - 1].before?.photo.width}
                          height={femaleB001[femaleB001.length - 1].before?.photo.height}
                          alt={femaleB001[femaleB001.length - 1].before?.photo.alt || ''}
                          className={styles['panel-photo-column2-image']}
                        />
                        <p className={`${styles['panel-photo-column2-image-label']} ${styles['gray']}`}>施術前</p>
                      </div>
                    </div>

                    <div className={styles['panel-photo-column2-cell']}>
                      <div className={styles['panel-photo-column2-image-wrapper']}>
                        <Image
                          src={femaleB001[femaleB001.length - 1].after?.photo.url || ''}
                          width={femaleB001[femaleB001.length - 1].after?.photo.width}
                          height={femaleB001[femaleB001.length - 1].after?.photo.height}
                          alt={femaleB001[femaleB001.length - 1].after?.photo.alt || ''}
                          className={styles['panel-photo-column2-image']}
                        />
                        <p className={`${styles['panel-photo-column2-image-label']} ${styles['red']}`}>施術後</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Space mt={['20px', '25px']} />

                <RoundedWithArrowButton
                  text='詳しくはこちらから'
                  onClick={() => null}
                  layoutClassName='secondary'
                  sizeClassName='large'
                  className='full-width'
                />
              </div>
            </div>
          </section>

          <Space mt={['40px', '100px']} />

          <section className={styles['contents-inner']}>
            <div className={styles['list-board-container']}>
              <div className={styles['list-board-image-wrapper']}>
                <Image
                  className={styles['list-board-image']}
                  src={LPPhotos.photo001}
                  width={640}
                  height={400}
                  alt='こんな方におすすめ'></Image>
              </div>
              <div className={styles['list-board-wrapper']}>
                <div className={styles['list-board-inner']}>
                  <div className={styles['list-board']}>
                    <p className={styles['panel-title']} style={{ width: '100%' }}>
                      <span className={styles['panel-title-black']}>該当する</span>
                      <span className={styles['panel-title-red']}>悩み</span>
                      <span className={styles['panel-title-black']}>はありますか？</span>
                    </p>

                    <p className={styles['list-board-item']}>治療期間の割に効果がでない</p>
                    <p className={styles['list-board-item']}>薬の効果だけでは将来が不安</p>
                    <p className={styles['list-board-item']}>高額な治療費がかかるんじゃないか</p>
                    <p className={styles['list-board-item']}>自身の生える力を伸ばしたい</p>
                    <p className={styles['list-board-item']}>注射治療に興味があるが、いまいちよく分からない</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles['text-001']}>
              <Image
                className={styles['list-board-image']}
                src={LPPhotos.topText001.src}
                width={640}
                height={353}
                alt=''
              />
            </div>
          </section>

          <Space mt={['40px', '55px']} />

          <section className={styles['contents-inner']}>
            <div className={styles['panel']}>
              <div className={styles['panel-inner']}>
                <div className={styles['panel-title-wrapper']}>
                  <h2 className={styles['panel-title']}>{`抜け毛の原因とは`}</h2>
                </div>
                <Space mt={['20px', '30px']} />
                <p className={styles['panel-text']}>
                  <span>カラダの内部で</span>
                  <span className={styles['panel-text-red']}>男性ホルモンが変化</span>
                  <span>することで、</span>
                  <span className={styles['panel-text-red']}>AGA（男性型脱毛症）が進行</span>
                  <span>してくるのです。</span>
                </p>
                <Space mt={['25px', '25px']} />
                <p className={styles['panel-text']}>
                  皮脂腺より分泌される５aリダクターゼにより変化させられた悪玉男性ホルモンが増加し、髪を正常にとどめておく力がどんどん弱まってしまいます。
                </p>
                <Space mt={['30px', '30px']} />
                <Image
                  className={styles['list-board-image']}
                  src={LPPhotos.topText002}
                  width={640}
                  height={400}
                  alt='男性ホルモンによる毛が抜けるメカニズム'
                />
              </div>
            </div>
          </section>

          <Space mt={['90px', '95px']} />

          <section className={styles['contents-inner']}>
            <div className={styles['panel']}>
              <div className={styles['panel-inner']}>
                <div className={styles['panel-title-wrapper']}>
                  <h2 className={styles['panel-title']}>{`髪の再生力を立て直す！`}</h2>
                </div>
                <Space mt={['20px', '30px']} />
                <p className={styles['panel-text']}>
                  この治療では、直接頭皮に髪の再生をサポートする成分を含んだ注射を行い、髪の根元に働きかけて成長を促進します。
                </p>
                <Space mt={['25px', '25px']} />
                <p className={styles['panel-text']}>
                  注射により、髪の成長に必要な成分を送り出す機能が活性化され、髪の健康をサポートします。この治療により、髪のボリュームが増し、薄毛の進行を抑える仕組みです。{' '}
                </p>
                <Space mt={['30px', '30px']} />
                <Image
                  className={styles['list-board-image']}
                  src={LPPhotos.photo001}
                  width={640}
                  height={400}
                  alt='こんな方におすすめ'
                />
              </div>
            </div>
          </section>

          <Space mt={['30px']} />

          <section className={styles['contents-inner']}>
            <div className={styles['panel']}>
              <div className={styles['panel-inner']}>
                <div className={styles['panel-title-wrapper']}>
                  <h2 className={styles['panel-title']}>{`治療のメリット`}</h2>
                </div>

                <Space mt={['20px', '30px']} />

                <p className={styles['panel-text']}>この注射治療には、いくつかの大きなメリットがあります。</p>

                <div className={styles['panel-content-border']}></div>

                <div className={styles['panel-column2-content-wrapper']}>
                  <div className={styles['panel-column2-content-left-cell']}>
                    <p className={`${styles['panel-column2-content-title']} ${styles['large-text']}`}>{`1.高い効果`}</p>
                  </div>

                  <Mobile>
                    <Space mt={['20px', '0px']} />
                  </Mobile>

                  <div className={styles['panel-column2-content-right-cell']}>
                    <p className={styles['panel-column2-content-text']}>
                      施術で使用される注射液には、髪の成長をサポートするために厳選された成分が含まれています。この成分が頭皮の奥深くまで浸透し、髪の根元に直接働きかけることで、髪のボリュームが増し、強くしなやかな髪を育てる効果が期待できます。
                    </p>
                  </div>
                </div>

                <div className={styles['panel-content-border']}></div>

                <div className={styles['panel-column2-content-wrapper']}>
                  <div className={styles['panel-column2-content-left-cell']}>
                    <p className={`${styles['panel-column2-content-title']} ${styles['large-text']}`}>2.安全性</p>
                  </div>

                  <Mobile>
                    <Space mt={['20px', '0px']} />
                  </Mobile>

                  <div className={styles['panel-column2-content-right-cell']}>
                    <p className={styles['panel-column2-content-text']}>
                      使用される成分は、安全性が確認された成分を使用しており、副作用のリスクが非常に低いです。施術は専門の医師が行い、定期的な経過観察を行うことで、安全に治療を受けることができます。
                    </p>
                  </div>
                </div>

                <div className={styles['panel-content-border']}></div>

                <div className={styles['panel-column2-content-wrapper']}>
                  <div className={styles['panel-column2-content-left-cell']}>
                    <p className={`${styles['panel-column2-content-title']} ${styles['large-text']}`}>
                      3.自然な仕上がり
                    </p>
                  </div>

                  <Mobile>
                    <Space mt={['20px', '0px']} />
                  </Mobile>

                  <div className={styles['panel-column2-content-right-cell']}>
                    <p className={styles['panel-column2-content-text']}>
                      注射による治療は、髪の自然な成長を促すことを目的としています。そのため、仕上がりが自然で、周囲に気付かれることなく髪のボリュームアップが可能です。
                    </p>
                  </div>
                </div>

                <div className={styles['panel-content-border']}></div>

                <div className={styles['panel-column2-content-wrapper']}>
                  <div className={styles['panel-column2-content-left-cell']}>
                    <p className={`${styles['panel-column2-content-title']} ${styles['large-text']}`}>
                      4.治療期間の目安
                    </p>
                  </div>

                  <Mobile>
                    <Space mt={['20px', '0px']} />
                  </Mobile>

                  <div className={styles['panel-column2-content-right-cell']}>
                    <p className={styles['panel-column2-content-text']}>
                      多くの方が1年を目安に髪のボリュームや質感の改善を実感できております。（効果には個人差があります）治療後も、髪の健康を維持するためのサポートを提供し、薄毛の進行を抑えることが期待できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Space mt={['40px', '40px']} />

          <section className={styles['contents-inner']}>
            <p className={styles['text-h2']}>{`天神ホリスティック\nビューティークリニックが\n選ばれる理由`}</p>

            <Space mt={['40px', '40px']} />

            <section>
              <div className={styles['panel']}>
                <div className={styles['panel-inner']}>
                  <div className={styles['panel-title-wrapper']}>
                    <h3 className={styles['panel-title']}>{`専門医による丁寧な診察`}</h3>
                  </div>
                  <Space mt={['20px', '30px']} />
                  <p className={styles['panel-text']}>
                    当院では、髪や頭皮のケアに精通した専門医が一人ひとりの症状やお悩みに寄り添い、最適な治療プランをご提案します。初回カウンセリングから施術、アフターケアまで一貫してサポートいたしますので、初めての方でも安心してご相談いただけます。
                  </p>
                  <Space mt={['30px', '30px']} />
                  <Image
                    className={styles['list-board-image']}
                    src={LPPhotos.photo001}
                    width={640}
                    height={400}
                    alt='こんな方におすすめ'
                  />
                </div>
              </div>
            </section>

            <Space mt={['20px', '20px']} />

            <section>
              <div className={styles['panel']}>
                <div className={styles['panel-inner']}>
                  <div className={styles['panel-title-wrapper']}>
                    <h3 className={styles['panel-title']}>{`高品質な治療材料`}</h3>
                  </div>
                  <Space mt={['20px', '30px']} />
                  <p className={styles['panel-text']}>
                    使用する注射液は、厳選された高品質な成分のみを採用しています。提携ラボ「Cysay社」から提供される製品は、国際的な基準をクリアしており、安全性が確認されています。{' '}
                  </p>
                  <Space mt={['30px', '30px']} />
                  <Image
                    className={styles['list-board-image']}
                    src={LPPhotos.photo001}
                    width={640}
                    height={400}
                    alt='こんな方におすすめ'
                  />
                </div>
              </div>
            </section>

            <Space mt={['20px', '20px']} />

            <section>
              <div className={styles['panel']}>
                <div className={styles['panel-inner']}>
                  <div className={styles['panel-title-wrapper']}>
                    <h3 className={styles['panel-title']}>{`患者様の声`}</h3>
                  </div>
                  <Space mt={['20px', '30px']} />
                  <p className={styles['panel-text']}>
                    多くの患者様から高評価をいただいております。下記モニター写真の通り、実際に効果を実感された方々からの喜びの声も多数寄せられております。{' '}
                  </p>
                  <Space mt={['30px', '30px']} />

                  <div>
                    <div className={styles['panel-photo-column2']}>
                      <div className={styles['panel-photo-column2-cell']}>
                        <div className={styles['panel-photo-column2-image-wrapper']}>
                          <Image
                            src={femaleA001[femaleA001.length - 1].before?.photo.url || ''}
                            width={femaleA001[femaleA001.length - 1].before?.photo.width}
                            height={femaleA001[femaleA001.length - 1].before?.photo.height}
                            alt={femaleA001[femaleA001.length - 1].before?.photo.alt || ''}
                            className={styles['panel-photo-column2-image']}
                          />
                          <p className={`${styles['panel-photo-column2-image-label']} ${styles['gray']}`}>施術前</p>
                        </div>
                      </div>

                      <div className={styles['panel-photo-column2-cell']}>
                        <div className={styles['panel-photo-column2-image-wrapper']}>
                          <Image
                            src={femaleA001[femaleA001.length - 1].after?.photo.url || ''}
                            width={femaleA001[femaleA001.length - 1].after?.photo.width}
                            height={femaleA001[femaleA001.length - 1].after?.photo.height}
                            alt={femaleA001[femaleA001.length - 1].after?.photo.alt || ''}
                            className={styles['panel-photo-column2-image']}
                          />
                          <p className={`${styles['panel-photo-column2-image-label']} ${styles['red']}`}>施術後</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={styles['panel-photo-column2']}>
                      <div className={styles['panel-photo-column2-cell']}>
                        <div className={styles['panel-photo-column2-image-wrapper']}>
                          <Image
                            src={femaleB001[femaleB001.length - 1].before?.photo.url || ''}
                            width={femaleB001[femaleB001.length - 1].before?.photo.width}
                            height={femaleB001[femaleB001.length - 1].before?.photo.height}
                            alt={femaleB001[femaleB001.length - 1].before?.photo.alt || ''}
                            className={styles['panel-photo-column2-image']}
                          />
                          <p className={`${styles['panel-photo-column2-image-label']} ${styles['gray']}`}>施術前</p>
                        </div>
                      </div>

                      <div className={styles['panel-photo-column2-cell']}>
                        <div className={styles['panel-photo-column2-image-wrapper']}>
                          <Image
                            src={femaleB001[femaleB001.length - 1].after?.photo.url || ''}
                            width={femaleB001[femaleB001.length - 1].after?.photo.width}
                            height={femaleB001[femaleB001.length - 1].after?.photo.height}
                            alt={femaleB001[femaleB001.length - 1].after?.photo.alt || ''}
                            className={styles['panel-photo-column2-image']}
                          />
                          <p className={`${styles['panel-photo-column2-image-label']} ${styles['red']}`}>施術後</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Space mt={['20px', '20px']} />

            <section>
              <div className={styles['panel']}>
                <div className={styles['panel-inner']}>
                  <div className={styles['panel-title-wrapper']}>
                    <h3 className={styles['panel-title']}>{`安全な施術環境`}</h3>
                  </div>
                  <Space mt={['20px', '30px']} />
                  <p className={styles['panel-text']}>
                    使用する注射液は、厳選された高品質な成分のみを採用しています。提携ラ当院は、最新の設備と清潔な環境を整えております。施術室は厳格な衛生管理のもと運営されており、安全かつ快適に治療を受けていただけます。ボ「Cysay社」から提供される製品は、国際的な基準をクリアしており、安全性が確認されています。{' '}
                  </p>
                  <Space mt={['30px', '30px']} />
                  <Image
                    className={styles['list-board-image']}
                    src={LPPhotos.photo001}
                    width={640}
                    height={400}
                    alt='こんな方におすすめ'
                  />
                  <Space mt={['20px', '20px']} />
                  <Image
                    className={styles['list-board-image']}
                    src={LPPhotos.photo001}
                    width={640}
                    height={400}
                    alt='こんな方におすすめ'
                  />
                </div>
              </div>
            </section>

            <Space mt={['20px', '20px']} />

            <section>
              <div className={styles['panel']}>
                <div className={styles['panel-inner']}>
                  <div className={styles['panel-title-wrapper']}>
                    <h3 className={styles['panel-title']}>{`充実したアフターサポート`}</h3>
                  </div>
                  <Space mt={['20px', '30px']} />
                  <p className={styles['panel-text']}>
                    施術後の経過観察やご相談にも丁寧に対応いたします。効果を持続させるためのホームケア方法や生活習慣のアドバイスなど、総合的なサポートを提供し、長期的な髪の健康をサポートします。{' '}
                  </p>
                  <Space mt={['30px', '30px']} />
                  <Image
                    className={styles['list-board-image']}
                    src={LPPhotos.photo001}
                    width={640}
                    height={400}
                    alt='こんな方におすすめ'
                  />
                </div>
              </div>
            </section>

            <Space mt={['20px', '25px']} />

            <div style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
              <RoundedWithArrowButton
                text='詳しくはこちらから'
                href={'https://hair.tenjin-hbc.jp/'}
                layoutClassName='secondary'
                sizeClassName='large'
                className='full-width'
              />
            </div>

            <Space mt={['40px', '50px']} />

            <Image
              className={styles['list-board-image']}
              src={LPPhotos.topText003}
              width={640}
              height={400}
              alt='早めに治療を開始するか
どうかで将来維持できる髪の量に
大きな差が出てくる
可能性があります。

髪のボリュームが見た目に
影響を与えると思われる方も
多いのではないでしょうか。'
            />

            <Space mt={['40px', '40px']} />

            <section>
              <div className={styles['panel']}>
                <div className={styles['panel-inner']}>
                  <div className={styles['panel-title-wrapper']}>
                    <h3 className={styles['panel-title']}>{`お問い合わせ先`}</h3>
                  </div>
                  <Space mt={['20px', '20px']} />
                  <div className={styles['list-board']}>
                    <p className={styles['list-board-item']}>信頼できる方法で、きちんとケアしたい。</p>
                    <p className={styles['list-board-item']}>自分の未来を安心して託せる治療を希望されている方。</p>
                  </div>

                  <Space mt={['20px', '20px']} />

                  <p className={`${styles['text-red']} ${styles['phone-panel-outer-text']}`}>
                    まずはお気軽にお問い合わせください
                  </p>

                  <Space mt={['50px', '50px']} />

                  <div className={styles['phone-panel']}>
                    <div className={styles['phone-panel-inner']}>
                      <div className={styles['phone-panel-head']}>
                        <p className={styles['phone-panel-head-text']}>無料カウンセリングを実施中</p>
                      </div>

                      <div className={styles['phone-panel-body']}>
                        <p className={styles['phone-panel-body-text']}>フリーダイヤル</p>
                        <p className={styles['phone-panel-body-text']}>
                          <a className={styles['phone-panel-body-phone-text']} href='tel:08008051565'>
                            0800-805-1565
                          </a>
                        </p>

                        <Space mt={['10px', '10px']} />

                        <div>
                          <p>
                            <span className={`${styles['phone-panel-body-description']}`}>お電話の際は</span>
                            <br />
                            <span className={`${styles['phone-panel-body-description']}`}>「</span>
                            <span className={`${styles['phone-panel-body-description']} ${styles['text-red']}`}>
                              WEBで毛髪再生セットを見ました
                            </span>
                            <span className={`${styles['phone-panel-body-description']}`}>」と</span>
                            <br />
                            <span className={`${styles['phone-panel-body-description']}`}>お電話でお伝え下さい。</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Space mt={['30px', '30px']} />
                  <Image
                    className={styles['list-board-image']}
                    src={LPPhotos.photo001}
                    width={640}
                    height={400}
                    alt='こんな方におすすめ'
                  />
                </div>
              </div>
            </section>
          </section>

          <Space mt={['30px', '30px']} />

          <section className={styles['contents-inner']}>
            <div className={styles['price-panel']}>
              <div className={styles['price-panel-inner']}>
                <div className={styles['price-panel-title-wrapper']}>
                  <p className={styles['price-panel-title-label']}>Price</p>
                  <h2 className={styles['price-panel-title']}>治療費</h2>
                </div>

                <Space mt={['20px', '50px']} />

                <div className={styles['price-panel-cell-wrapper']}>
                  <div className={styles['price-panel-left-cell']}>
                    <p className={`${styles['price-panel-text']} ${styles['text-brown']}`}>
                      培養上清での治療は、健康保険証の効かない自費診療です。治療内容に応じて、以下の通りの治療費がかかります。
                    </p>
                    <Space mt={['20px', '20px']} />
                  </div>
                  <div className={styles['price-panel-right-cell']}>
                    <div className={styles['price-panel-table']}>
                      <div className={styles['price-panel-table-item']}>
                        <div className={styles['price-panel-table-left-cell']} style={{ borderTopLeftRadius: 10 }}>
                          <p className={styles['price-panel-table-text']}>歯髄幹細胞培養上清液</p>
                          <p className={styles['price-panel-table-small-text']}>(水光注射:1回量2cc使用)</p>
                        </div>
                        <div className={styles['price-panel-table-right-cell']} style={{ borderTopRightRadius: 10 }}>
                          <p className={styles['price-panel-table-text']}>¥60,000</p>
                        </div>
                      </div>

                      <div className={`${styles['price-panel-table-item']}`}>
                        <div className={styles['price-panel-table-left-cell']}>
                          <p className={styles['price-panel-table-text']}>タブレット (内服)</p>
                        </div>
                        <div className={styles['price-panel-table-right-cell']}>
                          <p className={styles['price-panel-table-text']}>¥11,700</p>
                        </div>
                      </div>

                      <div className={`${styles['price-panel-table-item']}`}>
                        <div className={styles['price-panel-table-left-cell']}>
                          <p className={styles['price-panel-table-text']}>リキッド (外用)</p>
                        </div>
                        <div className={styles['price-panel-table-right-cell']}>
                          <p className={styles['price-panel-table-text']}>¥11,700</p>
                        </div>
                      </div>

                      <div className={`${styles['price-panel-table-item']} ${styles['bottom']}`}>
                        <div className={styles['price-panel-table-left-cell']} style={{ borderBottomLeftRadius: 10 }}>
                          <p className={styles['price-panel-table-text']}>上記三ヶ月セット</p>
                        </div>
                        <div className={styles['price-panel-table-right-cell']} style={{ borderBottomRightRadius: 10 }}>
                          <p className={styles['price-panel-table-text']}>¥225,000</p>
                        </div>
                      </div>
                    </div>

                    <Space mt={['30px']} />
                    <p className={styles['price-panel-bottom-text']}>提携ラボ 「Cysay社」</p>
                    <Space mt={['20px']} />
                    <p className={styles['price-panel-bottom-small-text']}>
                      Cysay社は世界特許取得した唯一の不死化ヒト歯髄幹細胞培養上清液を使用しております
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Space mt={['30px', '30px']} />

          <section className={styles['contents-inner']}>
            <div className={styles['panel']}>
              <div className={styles['panel-inner']}>
                <div className={styles['panel-title-wrapper']}>
                  <h2 className={styles['panel-title']}>{`モニター写真`}</h2>
                </div>

                <div className={styles['panel-content-border-default']}></div>

                <div className={styles['panel-column2-content-wrapper']}>
                  <div className={styles['panel-column2-content-left-cell']}>
                    <p className={styles['panel-column2-content-title']}>女性｜ケース1</p>
                  </div>
                  <div className={styles['panel-column2-content-right-cell']}>
                    <div className='panel-photo-column2-wrapper'>
                      {femaleA001.map((data, i) => {
                        return (
                          <div className={styles['panel-photo-column2']} key={`panel-photo-column2-${i}`}>
                            <div className={styles['panel-photo-column2-cell']}>
                              <div className={styles['panel-photo-column2-image-wrapper']}>
                                <Image
                                  src={data.before?.photo.url || ''}
                                  width={data.before?.photo.width}
                                  height={data.before?.photo.height}
                                  alt={data.before?.photo.alt || ''}
                                  className={styles['panel-photo-column2-image']}
                                />
                                <p className={`${styles['panel-photo-column2-image-label']} ${styles['gray']}`}>
                                  施術前
                                </p>
                              </div>
                            </div>

                            <div className={styles['panel-photo-column2-cell']}>
                              <div className={styles['panel-photo-column2-image-wrapper']}>
                                <Image
                                  src={data.after?.photo.url || ''}
                                  width={data.after?.photo.width}
                                  height={data.after?.photo.height}
                                  alt={data.after?.photo.alt || ''}
                                  className={styles['panel-photo-column2-image']}
                                />
                                <p className={`${styles['panel-photo-column2-image-label']} ${styles['red']}`}>
                                  施術後
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className={styles['panel-content-border']}></div>

                <div className={styles['panel-column2-content-wrapper']}>
                  <div className={styles['panel-column2-content-left-cell']}>
                    <p className={styles['panel-column2-content-title']}>女性｜ケース2</p>
                  </div>
                  <div className={styles['panel-column2-content-right-cell']}>
                    <div className='panel-photo-column2-wrapper'>
                      {femaleB001.map((data, i) => {
                        return (
                          <div className={styles['panel-photo-column2']} key={`panel-photo-column2-${i}`}>
                            <div className={styles['panel-photo-column2-cell']}>
                              <div className={styles['panel-photo-column2-image-wrapper']}>
                                <Image
                                  src={data.before?.photo.url || ''}
                                  width={data.before?.photo.width}
                                  height={data.before?.photo.height}
                                  alt={data.before?.photo.alt || ''}
                                  className={styles['panel-photo-column2-image']}
                                />
                                <p className={`${styles['panel-photo-column2-image-label']} ${styles['gray']}`}>
                                  施術前
                                </p>
                              </div>
                            </div>

                            <div className={styles['panel-photo-column2-cell']}>
                              <div className={styles['panel-photo-column2-image-wrapper']}>
                                <Image
                                  src={data.after?.photo.url || ''}
                                  width={data.after?.photo.width}
                                  height={data.after?.photo.height}
                                  alt={data.after?.photo.alt || ''}
                                  className={styles['panel-photo-column2-image']}
                                />
                                <p className={`${styles['panel-photo-column2-image-label']} ${styles['red']}`}>
                                  施術後
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className={styles['panel-content-border']}></div>
                <div className={styles['panel-column2-content-wrapper']}>
                  <div className={styles['panel-column2-content-left-cell']}>
                    <p className={styles['panel-column2-content-title']}>男性｜ケース1</p>
                  </div>
                  <div className={styles['panel-column2-content-right-cell']}>
                    <div className='panel-photo-column2-wrapper'>
                      {maleB001.map((data, i) => {
                        return (
                          <div className={styles['panel-photo-column2']} key={`panel-photo-column2-${i}`}>
                            <div className={styles['panel-photo-column2-cell']}>
                              <div className={styles['panel-photo-column2-image-wrapper']}>
                                <Image
                                  src={data.before?.photo.url || ''}
                                  width={data.before?.photo.width}
                                  height={data.before?.photo.height}
                                  alt={data.before?.photo.alt || ''}
                                  className={styles['panel-photo-column2-image']}
                                />
                                <p className={`${styles['panel-photo-column2-image-label']} ${styles['gray']}`}>
                                  施術前
                                </p>
                              </div>
                            </div>

                            <div className={styles['panel-photo-column2-cell']}>
                              <div className={styles['panel-photo-column2-image-wrapper']}>
                                <Image
                                  src={data.after?.photo.url || ''}
                                  width={data.after?.photo.width}
                                  height={data.after?.photo.height}
                                  alt={data.after?.photo.alt || ''}
                                  className={styles['panel-photo-column2-image']}
                                />
                                <p className={`${styles['panel-photo-column2-image-label']} ${styles['red']}`}>
                                  施術後
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <div className={styles['article-bottom-button-wrapper']}>
            <a href='tel:08008051565' className={styles['article-bottom-button-inner']}>
              <p className={styles['article-bottom-button-text']}>お申し込みはこちら</p>
              <p className={styles['article-bottom-button-tel-text']}>0800-805-1565</p>
            </a>
          </div> */}

          <Space mt={['60px']} />

          <ScrollTopButton onClick={handleTopPage} />
        </section>
      </div>

      <Footer />
    </article>
  );
};

export default Detail;
