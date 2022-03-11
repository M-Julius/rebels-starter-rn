import {
  Dispatches,
} from 'consts';

export default {
  dismissError: () => {
    return {
      type: Dispatches.DISMISS_ERROR,
    };
  },

  throwError: (type, message) => {
    return {
      type: Dispatches.THROW_ERROR,
      payload: {
        message: type,
        content_message: message,
      },
    };
  },
};
