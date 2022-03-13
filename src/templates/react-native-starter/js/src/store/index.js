import UserAction from './User/user.action';
import MiscAction from './Misc/misc.action';
import ErrorAction from './Error/error.action';

import UserReducer from './User/user.reducer';
import MiscReducer from './Misc/misc.reducer';
import ErrorReducer from './Error/error.reducer';

import { ReduxStore, asyncStore } from './config';

const reducers = {
  UserReducer,
  MiscReducer,
  ErrorReducer,
};

const actions = {
  UserAction,
  MiscAction,
  ErrorAction,
};

export {
  reducers,
  actions,
  ReduxStore,
  asyncStore,
};
