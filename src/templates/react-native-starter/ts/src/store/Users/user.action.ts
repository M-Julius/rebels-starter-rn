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

interface ADD_USER_INTERFACE {
    name: string,
    email: string ,
    password: string,
    role: string,
}

interface EDIT_USER_INTERFACE {
    name: string,
    role: string,
}

interface UPDATE_PASS_USER_INTERFACE {
    password: string,
    retype_password: string,
}

export default {


    // getDataPlaces: (keyword: string): ThunkAction<any, any, any, Action<any>> => dispatch => {


    addUser: (payload: ADD_USER_INTERFACE) => {
        return Api.request(
            {
                baseUrl: `${env.baseUrl}`,
                path: `${Endpoints.USERS.path}`,
                method: 'POST',
            },
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

    editSugItin: (id: string, payload: EDIT_USER_INTERFACE) => {
        return Api.request(
            [
                {
                    baseUrl: `${env.baseUrl}`,
                    path: `${Endpoints.USERS.path}`,
                    method: 'PUT',
                },
                id
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

    updatePassUser: (id: string, payload: UPDATE_PASS_USER_INTERFACE) => {
        return Api.request(
            [
                {
                    baseUrl: `${env.baseUrl}`,
                    path: `${Endpoints.USERS.path}`,
                    method: 'put',
                },
                `${id}/password`
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
}