import { fromJS } from 'immutable';

import { Dispatches } from 'consts';

/* Direct mutation of reducer state is prohibited.
Therefore, we must assign a new object where it takes a copy of our current state.
Immutable.JS have been designed to overcome the issues with immutability inherent within JavaScript,
providing all the benefits of immutability with the performance your app requires. */

const initialState = fromJS({
  token: '',
  member: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case Dispatches.LOGIN:
    case Dispatches.REGISTER:
      return state
        .set('member', fromJS(action.payload.member));

    case Dispatches.LOGOUT:
      return fromJS({
        token: '',
        member: {},
      });

    default:
      return state;
  }
};
