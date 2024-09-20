const myEnv = process.env.NEXT_PUBLIC_MY_ENV;
const assetHost = process.env.NEXT_PUBLIC_CLOUDFRONT_ASSETS_HOST;
const SERVER_PREFIX = '/_next/public';
const PROD_DOMAIN = 'https://aga.tenjin-hbc.jp';

export const NO_IMAGE1_1 = myEnv == 'local' ? '/no-image-1-1.png' : `${PROD_DOMAIN}/no-image-1-1.png`;
export const NO_IMAGE1_2 = myEnv == 'local' ? '/no-image-1-2.png' : `${PROD_DOMAIN}/no-image-1-2.png`;
export const NO_IMAGE2_1 = myEnv == 'local' ? '/no-image-2-1.png' : `${PROD_DOMAIN}/no-image-2-1.png`;
export const HEADER_LOGO = myEnv == 'local' ? '/header-logo@x2.png' : `${PROD_DOMAIN}/header-logo@x2.png`;

// sliders
export const SLIDE_001 = `${assetHost}/share/sliders/slide-001.png`;
export const SLIDE_002 = `${assetHost}/share/sliders/slide-002.png`;
export const SLIDE_003 = `${assetHost}/share/sliders/slide-003.png`;

// menus
export const NAV_PC_FACIAL = `${assetHost}/share/nav/nav-pc-menu-facial.png`;
export const NAV_PC_HAIR_REMOVAL = `${assetHost}/share/nav/nav-pc-menu-hair-removal.png`;
export const NAV_PC_ORTHOMOLECULAR = `${assetHost}/share/nav/nav-pc-menu-orthomolecular.png`;
export const NAV_PC_REGENERATIVE = `${assetHost}/share/nav/nav-pc-menu-regenerative.png`;

export const NAV_SP_FACIAL = `${assetHost}/share/nav/nav-sp-menu-facial.png`;
export const NAV_SP_HAIR_REMOVAL = `${assetHost}/share/nav/nav-sp-menu-hair-removal.png`;
export const NAV_SP_ORTHOMOLECULAR = `${assetHost}/share/nav/nav-sp-menu-orthomolecular.png`;
export const NAV_SP_REGENERATIVE = `${assetHost}/share/nav/nav-sp-menu-regenerative.png`;

export const NAV_SP_MENU_BG_WHITE_FACIAL = `${assetHost}/share/nav/nav-sp-menu-bg-white-facial.png`;
export const NAV_SP_MENU_BG_WHITE_HAIR_REMOVAL = `${assetHost}/share/nav/nav-sp-menu-bg-white-hair-removal.png`;
export const NAV_SP_MENU_BG_WHITE_ORTHOMOLECULAR = `${assetHost}/share/nav/nav-sp-menu-bg-white-orthomolecular.png`;
export const NAV_SP_MENU_BG_WHITE_REGENERATIVE = `${assetHost}/share/nav/nav-sp-menu-bg-white-regenerative.png`;

// introductions
export const INTRODUCTION_VIDEO = `${assetHost}/share/introductions/introduction-video.png`;

// store
export const BG_STORE = `${assetHost}/share/store/bg-store.webp`;

// NOTE: 下の画像はwebpにしたらテキストカラーの色味が変わったためpng
export const SHOP_CARD_HAKATA = `${assetHost}/share/store/shop-card-hakata.png`;
export const SHOP_CARD_HIMAWARI = `${assetHost}/share/store/shop-card-himawari.png`;
export const SHOP_CARD_ROPPONMATSU = `${assetHost}/share/store/shop-card-ropponmatsu.png`;
export const SHOP_CARD_TENJIN = `${assetHost}/share/store/shop-card-tenjin.png`;

// profile
export const HOSPITAL_DIRECTOR = `${assetHost}/share/profile/hospital-director.webp`;

// prices
export const FEMALE_ABOUT_WOMAN_PRICE = `${assetHost}/share/prices/female_adult_women_price.png`;

// banners
export const BANNER_2407_001 = `${assetHost}/share/banners/banner_2407_001 2.png`;

// import keyvisualGif from '~/assets/images/top/keyvisual.gif';
import mainPhoto001 from '~/assets/images/top/top-slide-001.png';
import mainPhoto002 from '~/assets/images/top/top-slide-002.png';
import mainPhoto003 from '~/assets/images/top/top-slide-003.png';
import mainPhoto004 from '~/assets/images/top/top-slide-004.png';

import topTexts from '~/assets/images/top/top-texts.png';
import topText001 from '~/assets/images/top/text-001.png';
import topText002 from '~/assets/images/top/text-002.png';
import topText003 from '~/assets/images/top/text-003.png';

import photo001 from '~/assets/images/top/photo-001.png';
import photo002 from '~/assets/images/top/photo-002.png';
import photo003 from '~/assets/images/top/photo-003.png';
import photo004 from '~/assets/images/top/photo-004.png';
import photo005 from '~/assets/images/top/photo-005.png';
import photo006 from '~/assets/images/top/photo-006.png';
import photo007 from '~/assets/images/top/photo-007.png';

export const LPPhotos = {
  // keyvisualGif: keyvisualGif,
  // keyvisualImage: keyvisualImage,
  mainPhoto001: mainPhoto001,
  mainPhoto002: mainPhoto002,
  mainPhoto003: mainPhoto003,
  mainPhoto004: mainPhoto004,

  topTexts: topTexts,

  topText001: topText001,
  topText002: topText002,
  topText003: topText003,

  photo001: photo001,
  photo002: photo002,
  photo003: photo003,
  photo004: photo004,
  photo005: photo005,
  photo006: photo006,
  photo007: photo007,
};
