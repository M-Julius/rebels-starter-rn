import { fromJS } from 'immutable';

import { Dispatches } from '../../const';

/* Direct mutation of reducer state is prohibited.
Therefore, we must assign a new object where it takes a copy of our current state.
Immutable.JS have been designed to overcome the issues with immutability inherent within JavaScript,
providing all the benefits of immutability with the performance your app requires. */

type State = {
    itineraryPlan: object
}

const initialState: State = fromJS({
    itineraryPlan: {},
})

type Actions = { type: string, payload: any }

const itineraryReducers = (state = initialState, action: Actions) => {
    const { type, payload } = action
    switch (type) {
        case Dispatches.SET_ITINERARY_PLAN:
            return {
                ...state,
                itineraryPlan : payload
            }
        // return state
        //     .set('places', fromJS(payload));
        default:
            return state;
    }
};

export default itineraryReducers