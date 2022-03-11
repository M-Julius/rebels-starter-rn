import { fromJS } from 'immutable';

import { Dispatches } from 'consts';

const initialState = fromJS({
  message: '',
  content_message: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case Dispatches.THROW_ERROR:
      return state
        .set('message', fromJS(action.payload.message))
        .set('content_message', fromJS(action.payload.content_message));

    case Dispatches.DISMISS_ERROR:
    case Dispatches.LOGOUT:
      return fromJS({
        message: '',
        content_message: null,
      });

    default:
      return state;
  }
};
