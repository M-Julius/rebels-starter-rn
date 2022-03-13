/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import AppRouter from './src/navigations';
import { ReduxStore } from './src/store/index'


const App = () => {
   return (
     <ReduxStore>
       <AppRouter />
     </ReduxStore>
   )
 }


 export default App;
