import { fromJS } from 'immutable';

import { Dispatches } from '../../const';

/* Direct mutation of reducer state is prohibited.
Therefore, we must assign a new object where it takes a copy of our current state.
Immutable.JS have been designed to overcome the issues with immutability inherent within JavaScript,
providing all the benefits of immutability with the performance your app requires. */

type State = {
    dataByCode: object,
}

const initialState = fromJS({
    dataByCode: {},
})

type Actions = { type: string, payload: any }

const sugItinReducers = (state = initialState, action: Actions) => {
    const { type, payload } = action
    switch (type) {
        case Dispatches.SET_SUGITIN_BY_CODE:
            return {
                ...state,
                dataByCode: payload,
            }
        // return state
        //     .set('places', fromJS(payload));
        default:
            return state;
    }
};

export default sugItinReducers