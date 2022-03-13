import { fromJS } from 'immutable';

import { Dispatches } from '../../const';

/* Direct mutation of reducer state is prohibited.
Therefore, we must assign a new object where it takes a copy of our current state.
Immutable.JS have been designed to overcome the issues with immutability inherent within JavaScript,
providing all the benefits of immutability with the performance your app requires. */

type State = {
    places: Array<object>
    thingsToDo: Array<object>
    restaurantsRecommendation: Array<object>
}

const initialState: State = fromJS({
    places: [],
    thingsToDo: [],
    restaurantsRecommendation: []
})

type Actions = { type: string, payload: any }

const exploreReducers = (state = initialState, action: Actions) => {
    const { type, payload } = action
    switch (type) {
        case Dispatches.SET_PLACES:
            return {
                ...state,
                places : payload
            }
        case Dispatches.SET_THINGS_TO_DO:
            return {
                ...state,
                thingsToDo: payload
            }
        case Dispatches.SET_RESTAURANTS_RECOMMENDATION:
            return {
                ...state,
                restaurantsRecommendation: payload
            }
        // return state
        //     .set('places', fromJS(payload));
        default:
            return state;
    }
};

export default exploreReducers