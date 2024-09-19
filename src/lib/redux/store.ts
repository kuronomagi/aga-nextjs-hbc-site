/* Core */
import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

/* Instruments */
import { middleware } from './middleware';
import { reducer } from './rootReducer';
import { storage } from './storage';
import { createWrapper } from 'next-redux-wrapper';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [],
  // blacklist: ['userStep2FrontValidation',]
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const reduxStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
});

export const persistor = persistStore(reduxStore);

// NOTE: un used persist
// export const reduxStore = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware => {
//     return getDefaultMiddleware().concat(middleware);
//   },
// });

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>;

const makeStore = () => reduxStore; // 追加

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
