import React from 'react';
import {compose, applyMiddleware, createStore, combineReducers} from 'redux';
import {persistStore, persistReducer, createTransform, createPersistoid} from 'redux-persist';
// import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import exploreReducers from './Explore/explore.reducer';
import autoMergeLevel2Immutable from './autoMergeLevel2Immutable';
import itineraryReducers from './Itinerary/itinerary.reducer';
import authReducers from './Auth/auth.reducer';
import sugItinReducers from './SugItin/sugItin.reducer';
import userReducers from './Users/user.reducer';

import Reactotron from '../ReactotronConfig';


const rootReducer = combineReducers({
  explore: exploreReducers,
  itinerary: itineraryReducers,
  auth: authReducers,
  sugitin: sugItinReducers,
  user: userReducers
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler : autoMergeLevel2Immutable,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer, 
  compose(
    applyMiddleware(thunk as ThunkMiddleware),
    Reactotron.createEnhancer()
  )
);

let persistor = persistStore(store);
// persistor.purge()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const ReduxStore = (props: any) => {
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        { props.children }
      </PersistGate>
    </Provider>
  );
};

export {
  store, 
  persistor,
  ReduxStore
};
