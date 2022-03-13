import { Actions } from 'react-native-router-flux';

import { Api } from '../../utils';
import {
	Endpoints,
	Dispatches,
} from '../../const';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from "redux";
import env from '../../../env';

export default {

    setItineraryPlan: (payload: object) => {
        return {
            type: Dispatches.SET_ITINERARY_PLAN,
            payload: payload
        }
    },
    
}