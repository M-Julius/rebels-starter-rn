import React from 'react';
import 'react-native-gesture-handler';
import { AppRouterFlux } from 'router';
import { ReduxStore } from 'store';

const App = () => {
  return (
    <ReduxStore>
      <AppRouterFlux/>
    </ReduxStore>
  );
};

export default App;
