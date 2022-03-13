import { Api } from 'utils';
import { Endpoints, Dispatches } from 'consts';

export default {
  startLoader: message => {
    return {
      type: Dispatches.LOADER_LOADING_START,
    };
  },

  endLoader: () => {
    return {
      type: Dispatches.LOADER_LOADING_END,
    };
  },

  startRegisterTimer: () => {
    return {
      type: Dispatches.TIMER_REGISTER_START,
    };
  },

  endRegisterTimer: () => {
    return {
      type: Dispatches.TIMER_REGISTER_END,
    };
  },

  nullRegisterTimer: () => {
    return {
      type: Dispatches.TIMER_REGISTER_NULL,
    };
  },

  startSearchTimer: () => {
    return {
      type: Dispatches.TIMER_SEARCH_START,
    };
  },

  endSearchTimer: () => {
    return {
      type: Dispatches.TIMER_SEARCH_END,
    };
  },

  nullSearchTimer: () => {
    return {
      type: Dispatches.TIMER_SEARCH_NULL,
    };
  },

  startScanTimer: () => {
    return {
      type: Dispatches.TIMER_SCAN_START,
    };
  },

  endScanTimer: () => {
    return {
      type: Dispatches.TIMER_SCAN_END,
    };
  },

  nullScanTimer: () => {
    return {
      type: Dispatches.TIMER_SCAN_NULL,
    };
  },
};
