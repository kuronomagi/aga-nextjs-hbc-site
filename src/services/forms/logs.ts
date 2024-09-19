/**
 * FormDataのログ確認
 */

export const traceLog = (value: any) => {
  if (process.env.NODE_ENV == 'development') {
    console.log(value);
  }
};

export const traceFormLog = (formData: any) => {
  console.log(...formData.entries());
};
