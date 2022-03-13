// import UserAction from './User/user.action';
// import MiscAction from './Misc/misc.action';
import ExploreAction from './Explore/explore.action';
import AuthAction from './Auth/auth.action';
import SugItinAction from './SugItin/sugItin.action';
import UserAction from './Users/user.action';

// import UserReducer from './User/user.reducer';
// import MiscReducer from './Misc/misc.reducer';
import ExploreReducer from './Explore/explore.reducer';
import AuthReducer from './Auth/auth.reducer';
import SugItinReducer from './SugItin/sugItin.reducer';
import UserReducer from './Users/user.reducer';

import { store, persistor, ReduxStore } from './config';

const reducers = {
    ExploreReducer,
    AuthReducer,
    SugItinReducer,
    UserReducer
};

const actions = {
    ExploreAction,
    AuthAction,
    SugItinAction,
    UserAction
};

export {
  reducers,
  actions,
  ReduxStore,
  store,
};