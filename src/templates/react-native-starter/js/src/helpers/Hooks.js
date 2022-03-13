import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

export default {
  useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    return [
      values,
      (e, key) => setValues({
        ...values,
        [key]: e,
      }),
    ];
  },

  useCustomDispatch: (action, callback = null) => {
    const dispatch = useDispatch();

    return useCallback((param, optParam = null) => dispatch(action(param, optParam, callback)), [dispatch, action, callback]);
  },

  useImmutableSelector: state => {
    return createSelector(
      state,
      data => fromJS(data),
    );
  },
};
