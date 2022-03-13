/* Created a custom automerge for immutable
  Adapted from https://github.com/rt2zz/redux-persist/blob/master/src/stateReconciler/autoMergeLevel2.js
*/

import { PersistConfig } from "redux-persist";

export default function autoMergeLevel2Immutable<State, Object>(
    inboundState: any,
    originalState: any,
    reducedState: any,
    { debug }: any
  ) {
  
    let newState = { ...reducedState };
    // only rehydrate if inboundState exists and is an object
    if (inboundState && typeof inboundState === 'object') {
      Object.keys(inboundState).forEach(key => {
        // ignore _persist data
        if (key === '_persist') { return; }
        // if reducer modifies substate, skip auto rehydration
        if (originalState[key] !== reducedState[key]) {
          if (process.env.NODE_ENV !== 'production' && debug) {
            console.log(
              'redux-persist/stateReconciler: sub state for key `%s` modified, skipping.',
              key
            );
  }
          return;
        }
        if (isPlainEnoughObject(reducedState[key].toJS())) {
          // if object is plain enough shallow merge the new values (hence "Level2")
          newState[key] = newState[key].merge(inboundState[key]);
          return;
        }
        // otherwise hard set
        newState[key] = inboundState[key];
      });
    }
  
    if (
      process.env.NODE_ENV !== 'production' &&
      debug &&
      inboundState &&
      typeof inboundState === 'object'
    ) {
      console.log(
        `redux-persist/stateReconciler: rehydrated keys '${Object.keys(
          inboundState
        ).join(', ')}'`
      );
  }
  
    return newState;
  }
  
  function isPlainEnoughObject(o: any) {
    return o !== null && !Array.isArray(o) && typeof o === 'object';
  }
  