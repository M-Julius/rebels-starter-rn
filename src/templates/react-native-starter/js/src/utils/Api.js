import { Actions } from 'react-native-router-flux';
import {
  Platform,
  Linking,
  Alert,
} from 'react-native';

import { Dispatches } from 'consts';
import { MiscHelper } from 'helpers';
import env from '../../env';

const timeoutPromise = (ms, promise) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('ERR:API TIMEOUT'));
    }, ms);
    promise.then(
      res => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      err => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
};

export default {
  request: (endpoint, requestBody, successFunction, errorFunction = null, preFunction = null, postFunction = null, callbackFunction = null) => {
    let url = null;
    let method = null;

    // ======== Dynamic URL Handler ========
    if (Array.isArray(endpoint)) {
      let api = endpoint[0];
      let param = endpoint[1];
      let param2 = endpoint[2];

      if (api.path.indexOf('$') === -1) {
        // If $ not exist
        url = api.baseUrl + api.path + '/' + param;
        method = api.method;
      } else {
        // If $ or & exist
        url = api.baseUrl + api.path.replace(/\$/g, param).replace(/\&/g, param2);
        method = api.method;
      }

    } else {
      url = endpoint.baseUrl + endpoint.path;
      method = endpoint.method;
    }

    // ======== Query Param Handler ========
    // The Object.keys() method returns an array of a given object's own property names
    if (method === 'GET' && requestBody !== {}) {
      // Only if the requestBody has a value, then return '&' else ''
      let queryParams = Object.keys(requestBody).length > 0 ? '?' : '';
      let i = 0;

      for (let key in requestBody) {
        // Only if the key has a value, otherwise won't be added to the queryParams
        if (requestBody[key] !== null) {
          queryParams += (i > 0 ? '&' : '') + key + '=' + requestBody[key];
          ++i;
        }
      }

      url += queryParams;
    }

    // ======== Return Function ========
    // dispatch and getState are the return of redux-thunk
    return (dispatch, getState) => {
      const token = getState().user.getIn(['user', 'token']);

      const makeRequest = async() => {
        try {
          // ======== Prefunction ========
          if (typeof preFunction === 'function') {
            await preFunction(dispatch);
          }

          MiscHelper.consoleLogger('==== INIT ====', endpoint.method || endpoint[0].method, endpoint.path || endpoint[0].path);

          // ======== Manage Form Data ========
          let options = null;
          let apiFetch = null;

          options = {
            method  : method,
            headers : {
              'Accept'        : 'application/json',
              'Content-Type'  : 'application/json',
              'Authorization' : token ? (token) : null,
              // 'Apk-Version': env.apkVersion,
            },
            body: method !== 'GET' ? JSON.stringify(requestBody) : undefined,
          };

          // ======== Fetch ========
          apiFetch = await fetch(url, options);

          MiscHelper.consoleLogger('==== FETCH ====', apiFetch);
          let response = await apiFetch.json();
          // MiscHelper.consoleLogger('==== RESPONSE ====', endpoint.path || endpoint[0].path, response);
          // MiscHelper.consoleLogger('requestBody', requestBody);

          // ======== Success or Error Handler ========
          if (apiFetch.ok && response.stat_code.indexOf('ERR') === -1) {
            // ======== Execute Success dispatch ========
            await successFunction(response.data, dispatch, apiFetch.ok);
          } else {
            await dispatch({
              type: Dispatches.FORCE_LOADING_END,
            });

            // ======== Error Handler: push new version ========
            if (response.stat_code === 'ERR:NEW VERSION') {
              Alert.alert(
                'New Update',
                'Update aplikasi Anda dengan versi terbaru.',
                [
                  {
                    text: 'Cancel',
                  },
                  {
                    text    : 'Update',
                    onPress : () => {
                      if (Platform.OS === 'android') {
                        return Linking.openURL(env.googlePlayStore);
                      } else if (Platform.OS === 'ios') {
                        return Linking.openURL(env.appStore);
                      }
                    },
                  },
                ],
                { cancelable: false },
              );
            }

            // ======== Error Handler: unauthorized ========
            if (response.stat_code === 'ERR:AUTHENTICATION') {
              await dispatch({
                type: Dispatches.LOGOUT,
              });

              await errorFunction(response, dispatch);

              Actions.reset('resource');

              return false;
            }

            // ======== Execute THROW_ERROR dispatch ========
            if (typeof errorFunction === 'function') {
              MiscHelper.consoleLogger('Error debugger: utilities/api: (#1)', response);
              return errorFunction(response, dispatch);
            } else {
              MiscHelper.consoleLogger('Error debugger: utilities/api: (#2)', response);
              return alert('Oops, sorry, we are experiencing some problem (#1)'); // eslint-disable-line no-alert
            }
          }

          // ======== Postfunction ========
          if (typeof postFunction === 'function') {
            await postFunction(dispatch);
          }

          // ======== Callback Handler ========
          if (apiFetch.ok && typeof callbackFunction !== 'function' && callbackFunction !== null && callbackFunction.callback !== null) {
            await callbackFunction.callback(dispatch);
          }

          return true;

        } catch (error) {
          dispatch({
            type: Dispatches.FORCE_LOADING_END,
          });

          if (typeof errorFunction === 'function') {
            MiscHelper.consoleLogger('Error debugger: utilities/api: (#3)', error);
            return errorFunction({ message: 'Oops, sorry, we are experiencing some problem (#2)' }, dispatch);
          } else {
            MiscHelper.consoleLogger('Error debugger: utilities/api: (#4)', error);
            return alert('Oops, sorry, we are experiencing some problem (#3)'); // eslint-disable-line no-alert
          }
        }
      };

      return makeRequest();
    };
  },

  requestWithoutDispatch: (method, baseUrl, endpoint, requestBody) => {
    const token = null;

    const makeRequest = async() => {
      try {
        MiscHelper.consoleLogger('==== INIT ====', endpoint, method);

        let apiFetch = await fetch(`${baseUrl}${endpoint}`.toString(),
        {
          method  : method,
          headers : {
            'Accept'        : 'application/json',
            'Content-Type'  : 'application/json',
            'Authorization' : token ? token : null,
          },
          body: method !== 'GET' ? JSON.stringify(requestBody) : undefined,
        });

        MiscHelper.consoleLogger('==== FETCH ====', apiFetch);
        // MiscHelper.consoleLogger('requestBody', requestBody);

        let response = await apiFetch.json();

        if (apiFetch.ok) {
          return {
            body           : response.data,
            details        : apiFetch,
            success_status : apiFetch.ok,
          };
        } else {
          return {
            code           : response.stat_code,
            message        : response.stat_msg,
            success_status : apiFetch.ok,
          };
        }
      } catch (error) {
        MiscHelper.consoleLogger('Error debugger: utilities/api:', error);
        return alert('Oops, sorry, we are experiencing some problem (#4)'); // eslint-disable-line no-alert
      }
    };

    return makeRequest();
  },
};
