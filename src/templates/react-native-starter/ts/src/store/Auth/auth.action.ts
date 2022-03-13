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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    CHANGE_PASS_INTERFACE, 
    FORGOT_TOKEN_INTERFACE, 
    FORGOT_USER_INTERFACE, 
    LOGIN_INTERFACE, 
    REGISTER_INTERFACE 
} from './auth.interface';


export default {

    setUser: (payload: object) => {
        console.log(payload, 'data payload')
        return {
            type: Dispatches.SET_USER,
            payload: payload
        }
    },

    // getDataPlaces: (keyword: string): ThunkAction<any, any, any, Action<any>> => dispatch => {


    login: (payload: LOGIN_INTERFACE) => {
        return Api.request(
            {
                baseUrl: `${env.baseUrl}`,
                path: `${Endpoints.LOGIN.path}`,
                method: `${Endpoints.LOGIN.method}`,
            },
            payload
            ,
            (response: any, dispatch: ThunkDispatch<any, undefined, Action<any>>, success: boolean) => {

                if (success) {
                    AsyncStorage.setItem('token', response.token)
                    dispatch({
                        type: Dispatches.SET_USER,
                        payload: response
                    })
                }
            },
            (message: string, code: string, dispatch: ThunkDispatch<any, undefined, Action<any>>) => {
                console.log('error here', message, code)
            },
        )

    },

    forgotPassUser: (payload: FORGOT_USER_INTERFACE) => {
        return Api.request(
            {
                baseUrl: `${env.baseUrl}`,
                path: `${Endpoints.FORGOTPASS.path}`,
                method: `${Endpoints.FORGOTPASS.method}`,
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

    forgotPassToken: (payload: FORGOT_TOKEN_INTERFACE) => {
        return Api.request(
            {
                baseUrl: `${env.baseUrl}`,
                path: `${Endpoints.FORGOTPASS.path}`,
                method: `${Endpoints.FORGOTPASS.method}`,
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

    changePass: (payload: CHANGE_PASS_INTERFACE) => {
        return Api.request(
            {
                baseUrl: `${env.baseUrl}`,
                path: `${Endpoints.CHANGEPASS.path}`,
                method: `${Endpoints.CHANGEPASS.method}`,
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

    register: (payload: REGISTER_INTERFACE) => {
        return Api.request(
            {
                baseUrl: `${env.baseUrl}`,
                path: `${Endpoints.REGISTER.path}`,
                method: `${Endpoints.REGISTER.method}`,
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
}