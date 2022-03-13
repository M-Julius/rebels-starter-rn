import { Actions } from 'react-native-router-flux';

import { Api } from 'utils';
import {
	Endpoints,
	Dispatches,
} from 'consts';

export default {
  // action creator without async calls / AJAX calls
  setData: inputValue => {
    return {
      type: 'SET_DATA',
      payload: {
        data: inputValue,
      },
    };
  },

  deleteData: index => {
    return {
      type: 'DELETE_DATA',
      payload: {
        data: index,
      },
    };
  },

  // action creator with async calls / AJAX calls
  login: data => {
    return Api.request(
      {
        baseUrl: 'http://example.com',
        path: 'login',
        method: 'POST',
      },
      data,
      (response, dispatch, success) => {
        dispatch({
          type: 'LOGIN',
          payload: response.data,
        });

        if (success) { Actions.welcome; }
      }
    );
  },

	register: data => {
    return Api.request(
      Endpoints.REGISTER,
      data,
      (response, dispatch, success) => {
        if (success) {
          // Actions.tnc({ email: data.email, fromRegister: true });
        }
      },
      (response, dispatch) => {
        dispatch({
          type: Dispatches.THROW_ERROR,
          payload: {
            message: response.msg,
            content_message: response.content_msg || response.message,
          },
        });
      },
      dispatch => {
        dispatch({
          type: Dispatches.API_LOADING_START,
        });
      },
      dispatch => {
        dispatch({
          type: Dispatches.API_LOADING_END,
        });
      },
    );
  },
};
