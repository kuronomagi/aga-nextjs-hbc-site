import colors from './colors';
import zIndexes from './zIndexes';

export const theme = {
  breakpoints: ['576px', '768px', '1024px', '1200px'],
  'breakpoint-se': ['350px'],
  space: [
    0, // 0
    5, // 1
    8, // 2
    10, // 3
    15, // 4
    20, // 5
    25, // 6
    30, // 7
    40, // 8
    50, // 9
    60, // 10
    70, // 11
    75, // 12
    80, // 13
    90, // 14
    100, // 15
    120, // 16
  ],
  fontSizes: [
    10, // 0
    12, // 1
    14, // 2
    15, // 3
    16, // 4
    18, // 5
    20, // 6
    22, // 7
    24, // 8
    26, // 9
    28, // 10
    30, // 11
    34, // 12
    36, // 13
    40, // 14
    44, // 15
    48, // 16
    80, // 17
    96, // 18
  ],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontFamily: [
    // tslint:disable-next-line:quotemark
    'Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", Verdana, "メイリオ", Meiryo, sans-serif',
    '"游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif',
    '"Montserrat","Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", system-ui',
    'Meiryo, メイリオ, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Osaka, "MS PGothic", arial, helvetica, sans-serif',
  ],
  lineHeights: {
    normal: 1,
    normalText: 1.5,
    title: 2,
    text: 1.7,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 45, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 48, 50, 55, 70, 80, 120, 230],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  zIndexes,
  weeks: ['月', '火', '水', '木', '金', '土', '日'],
  imageExtensions: ['png', 'PNG', 'jpeg', 'jpg', 'JPEG', 'JPG', 'gif', 'GIF', 'tiff', 'TIFF', 'bmp', 'BMP'],
  pdfExtensions: ['pdf', 'PDF'],
};
