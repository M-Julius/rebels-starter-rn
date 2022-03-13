import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/config'
import { useCallback, useState } from 'react';
import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export default {
  useForm(initialValues: any) {
    const [values, setValues] = useState(initialValues);

    return [
      values,
      (e: any, key: any) => setValues({
        ...values,
        [key]: e,
      }),
    ];
  },

  useCustomDispatch: (action: any, callback = null) => {
    const dispatch = useDispatch();

    return useCallback((param, optParam = null) => dispatch(action(param, optParam, callback)), [dispatch, action, callback]);
  },

  useImmutableSelector: (state: any) => {
    return createSelector(
      state,
      (data: any) => fromJS(data),
    );
  },
};


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector