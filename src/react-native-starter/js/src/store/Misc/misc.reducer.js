import { fromJS } from 'immutable';

import { Dispatches } from 'consts';

/* Direct mutation of reducer state is prohibited.
Therefore, we must assign a new object where it takes a copy of our current state.
Immutable.JS have been designed to overcome the issues with immutability inherent within JavaScript,
providing all the benefits of immutability with the performance your app requires. */

const initialState = fromJS({
  timerRegisterStart: null,
  timerRegisterEnd: null,
  timerSearchStart: null,
  timerSearchEnd: null,
  timerScanStart: null,
  timerScanEnd: null,
  isLoading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case Dispatches.TIMER_REGISTER_START:
      return state
        .set('timerRegisterStart', Math.round(new Date().getTime() / 1000));

    case Dispatches.TIMER_REGISTER_END:
      return state
        .set('timerRegisterEnd', Math.round(new Date().getTime() / 1000));

    case Dispatches.TIMER_REGISTER_NULL:
      return state
        .set('timerRegisterStart', null)
        .set('timerRegisterEnd', null);

    case Dispatches.TIMER_SEARCH_START:
      return state
        .set('timerSearchStart', Math.round(new Date().getTime() / 1000));

    case Dispatches.TIMER_SEARCH_END:
      return state
        .set('timerSearchEnd', Math.round(new Date().getTime() / 1000));

    case Dispatches.TIMER_SEARCH_NULL:
      return state
        .set('timerSearchStart', null)
        .set('timerSearchEnd', null);

    case Dispatches.TIMER_SCAN_START:
      return state
        .set('timerScanStart', Math.round(new Date().getTime() / 1000));

    case Dispatches.TIMER_SCAN_END:
      return state
        .set('timerScanEnd', Math.round(new Date().getTime() / 1000));

    case Dispatches.TIMER_SCAN_NULL:
      return state
        .set('timerScanStart', null)
        .set('timerScanEnd', null);

    case Dispatches.LOADER_LOADING_START:
      return state
        .set('isLoading', fromJS(true));

    case Dispatches.FORCE_LOADING_END:
    case Dispatches.LOADER_LOADING_END:
      return state
        .set('isLoading', false);

    case Dispatches.LOGOUT:
      return fromJS({
        timerRegisterStart: null,
        timerRegisterEnd: null,
        timerSearchStart: null,
        timerSearchEnd: null,
        timerScanStart: null,
        timerScanEnd: null,
        isLoading: false,
      });

    default:
      return state;
  }
};
