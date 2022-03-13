import { Actions } from 'react-native-router-flux';

import { Api } from '../../utils';
import {
	Endpoints,
	Dispatches,
} from '../../const';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from "redux";
import { Alert } from 'react-native';
import env from '../../../env';

interface SUGITIN_INTERFACE {
    title: string,
    content: string ,
    price: number,
    start_date: string,
    end_date: string,
    details:  Array<object>,
    tags: Array<number>,
    new_tags: Array<string>
}

export default {

    setUser: (payload: object) => {
        console.log(payload, 'data payload')
        return {
            type: Dispatches.SET_SUGITIN_BY_CODE,
            payload: payload
        }
    },

    // getDataPlaces: (keyword: string): ThunkAction<any, any, any, Action<any>> => dispatch => {


    getSugItinByCode: (code: string, payload?: any) => {
        return Api.request(
            [
                {
                    baseUrl: `${env.baseUrl}`,
                    path: `${Endpoints.SUGIT.path}`,
                    method: 'GET',
                },
                code
            ],
            payload
            ,
            (response: any, dispatch: ThunkDispatch<any, undefined, Action<any>>, success: boolean) => {

                if (success) {
                    dispatch({
                        type: Dispatches.SET_SUGITIN_BY_CODE,
                        payload: response
                    })
                }
            },
            (message: string, code: string, dispatch: ThunkDispatch<any, undefined, Action<any>>) => {
                console.log('error here', message, code)
            },
        )

    },

    editSugItin: (code: string, payload: SUGITIN_INTERFACE) => {
        return Api.request(
            [
                {
                    baseUrl: `${env.baseUrl}`,
                    path: `${Endpoints.SUGIT.path}`,
                    method: 'POST',
                },
                code
            ],
            payload
            ,
            (response: any, dispatch: ThunkDispatch<any, undefined, Action<any>>, success: boolean) => {

                if (success) {
                    console.log(response)
                }
            },
            (message: string, code: string, dispatch: ThunkDispatch<any, undefined, Action<any>>) => {
                console.log('error here', message, code)
            },
        )

    },

    deleteSugItin: (code: string) => {
        return Api.request(
            [
                {
                    baseUrl: `${env.baseUrl}`,
                    path: `${Endpoints.SUGIT.path}`,
                    method: 'DELETE',
                },
                code
            ],
            {}
            ,
            (response: any, dispatch: ThunkDispatch<any, undefined, Action<any>>, success: boolean) => {

                if (success) {
                    console.log(response)
                }
            },
            (message: string, code: string, dispatch: ThunkDispatch<any, undefined, Action<any>>) => {
                console.log('error here', message, code)
            },
        )

    },
}