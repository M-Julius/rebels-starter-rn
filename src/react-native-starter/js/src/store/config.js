import React from 'react';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

import UserReducer from './User/user.reducer';
import MiscReducer from './Misc/misc.reducer';
import ErrorReducer from './Error/error.reducer';

import autoMergeLevel2Immutable from './autoMergeLevel2Immutable';

import Reactotron from '../ReactotronConfig';

const rootReducer = combineReducers({
  user  : UserReducer,
  misc  : MiscReducer,
  error : ErrorReducer,
});

const persistConfig = {
  key             : 'root',
  storage         : AsyncStorage,
  stateReconciler : autoMergeLevel2Immutable,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const asyncStore = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk,
    ),
    Reactotron.createEnhancer()
  ),
);

const persistor = persistStore(asyncStore);
// persistor.purge();

const ReduxStore = props => {
  return (
    <Provider store={ asyncStore }>
      <PersistGate loading={ null } persistor={ persistor }>
        { props.children }
      </PersistGate>
    </Provider>
  );
};

export { ReduxStore, asyncStore };
