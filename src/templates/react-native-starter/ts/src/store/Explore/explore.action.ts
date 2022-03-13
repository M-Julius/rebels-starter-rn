import { Actions } from 'react-native-router-flux';

import { Api } from '../../utils';
import {
	Endpoints,
	Dispatches,
} from '../../const';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from "redux";
import env from '../../../env';

const GOOGLE_BASE_URL = 'https://maps.googleapis.com/maps/api/place'

export default {

    setDataPlaces: (payload: Array<object>) => {
        return {
            type: Dispatches.SET_PLACES,
            payload: payload
        }
    },

    // getDataPlaces: (keyword: string): ThunkAction<any, any, any, Action<any>> => dispatch => {
    getDataPlaces: (keyword: string) => {
        return Api.request(
            [
                {
                    baseUrl: `${GOOGLE_BASE_URL}`,
                    path: `/findplacefromtext`, 
                    method: 'GET',
                },
                'json'
            ],
            {
                input: keyword,
                inputtype: 'textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry',
                key: env.GOOGLE_API_KEY
            },
            (response: any, dispatch: ThunkDispatch<any, undefined, Action<any>>, success: boolean) => {
                
                if (success) { 
                    dispatch({
                        type: Dispatches.SET_PLACES,
                        payload: response.candidates
                    })
                }
            },
            (message: string, code: string, dispatch: ThunkDispatch<any, undefined, Action<any>>) => {
                console.log('error here', message, code)
            },
        )
        
    },

    getDataNearByPlaces: (keyword: string) => {
        return Api.request(
            [
                {
                    baseUrl: `${GOOGLE_BASE_URL}`,
                    path: `/textsearch`, 
                    method: 'GET',
                },
                'json'
            ],
            {
                query: keyword,
                key: env.GOOGLE_API_KEY,
            },
            (response: any, dispatch: ThunkDispatch<any, undefined, Action<any>>, success: boolean) => {
                
                if (success) { 
                    dispatch({
                        type: Dispatches.SET_PLACES,
                        payload: response.results
                    })
                }
            },
            (message: string, code: string, dispatch: ThunkDispatch<any, undefined, Action<any>>) => {
                console.log('error here', message, code)
            },
        )
    },

    getRecommendationPlaces: (keyword: string, category: string, typeCategory: string) => {
        return Api.request(
            [
                {
                    baseUrl: `${GOOGLE_BASE_URL}`,
                    path: `/textsearch`, 
                    method: 'GET',
                },
                'json'
            ],
            {
                query: `${category} ${keyword}`,
                key: env.GOOGLE_API_KEY,
            },
            (response: any, dispatch: ThunkDispatch<any, undefined, Action<any>>, success: boolean) => {
                
                if (success) { 
                    if(typeCategory === 'attraction'){
                        dispatch({
                            type: Dispatches.SET_THINGS_TO_DO,
                            payload: response.results
                        })

                    }

                    if(typeCategory === 'food') {
                        dispatch({
                            type: Dispatches.SET_RESTAURANTS_RECOMMENDATION,
                            payload: response.results
                        })
                    }
                }
            },
            (message: string, code: string, dispatch: ThunkDispatch<any, undefined, Action<any>>) => {
                console.log('error here', message, code)
            },
        )
    }
}