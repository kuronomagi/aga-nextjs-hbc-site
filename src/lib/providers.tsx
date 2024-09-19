'use client';

/* Core */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createWrapper } from 'next-redux-wrapper';

// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// import { setDefaultOptions } from 'date-fns';
// import { ja, enGB } from 'date-fns/locale';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { jaJP } from '@mui/x-date-pickers/locales';

import 'react-toastify/dist/ReactToastify.css';
/* Instruments */
import { persistor, reduxStore } from '~/lib/redux';
// import { useDisableCopy } from '~/hooks/copy/disable.copy';

// if (ja && ja.options && ja.options != undefined) {
//   ja.options.weekStartsOn = 1;
// }

// import jaLocale from 'date-fns/locale/ja';

export const Providers = (props: React.PropsWithChildren) => {
  // const theme = createTheme(
  //   {
  //     palette: {
  //       primary: { main: '#1976d2' },
  //     },
  //   },
  //   jaJP,
  // );

  // useDisableCopy();

  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};
