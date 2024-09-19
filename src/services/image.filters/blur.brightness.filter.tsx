// core
import { useRef, useEffect } from 'react';
import { canvasRGBA as stackBlurCanvasRGBA } from 'stackblur-canvas';

// backdrop-filter: blur(50px) brightness(30%); の効果を再現
export const BlurBrightnessFilter: React.FC<{ src: string; brightness: number; blur: number }> = ({
  src,
  brightness,
  blur,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // NOTE: 24/6/3 修正前 (画像の輪郭がはっきりしている)
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas?.getContext('2d');

  //   if (context) {
  //     const image = new Image();
  //     image.crossOrigin = 'anonymous'; // cors回避
  //     image.src = src;
  //     image.onload = () => {
  //       if (!!canvas) {
  //         canvas.width = image.width;
  //         canvas.height = image.height;
  //       }

  //       context.drawImage(image, 0, 0, image.width, image.height);
  //       const imageData = context.getImageData(0, 0, image.width, image.height);
  //       const data = imageData.data;

  //       // 明るさのフィルターを適用
  //       for (let i = 0; i < data.length; i += 4) {
  //         // 明るさを30%に調整
  //         data[i] = data[i] * brightness; // Red
  //         data[i + 1] = data[i + 1] * brightness; // Green
  //         data[i + 2] = data[i + 2] * brightness; // Blue
  //       }

  //       // 明るさのフィルターを適用したデータをキャンバスに描画
  //       context.putImageData(imageData, 0, 0);

  //       // ブラー効果を適用
  //       if (!!canvas) {
  //         stackBlurCanvasRGBA(canvas, 0, 0, image.width, image.height, blur);
  //       }
  //     };
  //   }
  // }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    console.log('=== context===', context);

    if (context) {
      const image = new Image();
      image.crossOrigin = 'anonymous'; // cors回避

      console.log('=== src ===', src);
      image.src = src;
      // エラーハンドリングを追加
      image.onerror = error => {
        console.error('画像のロードに失敗しました');

        console.log('=== error ===', error);
      };

      image.onload = () => {
        if (!!canvas) {
          // canvasの現在のサイズを取得
          const canvasWidth = canvas.clientWidth;
          const canvasHeight = canvas.clientHeight;

          // 画像をcanvas全体にフィットさせるためのコードを追加
          let scale = Math.max(canvasWidth / image.width, canvasHeight / image.height);
          let x = (canvasWidth - image.width * scale) / 2;
          let y = (canvasHeight - image.height * scale) / 2;
          context.clearRect(0, 0, canvasWidth, canvasHeight); // Clear the canvas
          context.drawImage(image, x, y, image.width * scale, image.height * scale);

          if (canvasWidth == 0 || canvasHeight == 0) {
            return;
          }

          const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
          const data = imageData.data;

          // 明るさのフィルターを適用
          for (let i = 0; i < data.length; i += 4) {
            data[i] = data[i] * brightness; // Red
            data[i + 1] = data[i + 1] * brightness; // Green
            data[i + 2] = data[i + 2] * brightness; // Blue
          }

          // 明るさのフィルターを適用したデータをキャンバスに描画
          context.putImageData(imageData, 0, 0);

          // ブラー効果を適用
          stackBlurCanvasRGBA(canvas, 0, 0, canvas.width, canvas.height, blur);
        }
      };
    }
  }, [src]);
  return <canvas ref={canvasRef} />;
};

// blurのみ
// const BlurBrightnessFilter: React.FC<{ src: string }> = ({ src }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext('2d');

//     if (context) {
//       const image = new Image();
//       image.crossOrigin = 'anonymous';
//       image.src = src;
//       image.onload = () => {
//         if (!!canvas) {
//           canvas.width = image.width;
//           canvas.height = image.height;
//         }

//         context.drawImage(image, 0, 0, image.width, image.height);
//       };
//     }
//   }, [src]);

//   return <canvas ref={canvasRef} />;
// };

// const BlurBrightnessFilter: React.FC<{ src: string }> = ({ src }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext('2d');

//     if (context) {
//       const image = new Image();
//       image.crossOrigin = 'anonymous';
//       image.src = src;
//       image.onload = () => {
//         if (!!canvas) {
//           canvas.width = image.width;
//           canvas.height = image.height;
//         }

//         context.drawImage(image, 0, 0, image.width, image.height);
//         const imageData = context.getImageData(0, 0, image.width, image.height);
//         const data = imageData.data;

//         // 明るさのフィルターを適用
//         for (let i = 0; i < data.length; i += 4) {
//           // 明るさを30%に調整
//           data[i] = data[i] * 1; // Red
//           data[i + 1] = data[i + 1] * 1; // Green
//           data[i + 2] = data[i + 2] * 1; // Blue
//         }

//         // ブラー効果を適用 not working
//         if (!!canvas) {
//           const result = stackBlurCanvasRGBA(canvas, 0, 0, image.width, image.height, 10);
//           console.log('=== result =-=', canvas);
//         }

//         console.log('=== imageData =-=', imageData);

//         context.putImageData(imageData, 0, 0);
//       };
//     }
//   }, [src]);

//   return <canvas ref={canvasRef} />;
// };
