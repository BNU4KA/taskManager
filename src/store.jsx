import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import rootReducer from './slices/index';

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.ENV !== 'production',
    middleware: [thunk],
  });
  // if (process.env.ENV !== 'production' && module.hot) {
  //   module.hot.accept('./slicers', () => store.replaceReducer(rootReducer));
  // }
  return store;
};

export const testStore = makeStore();

export const ReduxWrapper = createWrapper(makeStore);
