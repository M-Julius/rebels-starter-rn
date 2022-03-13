// ReactotronConfig.js
import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

// then add it to the plugin list
// Reactotron
const reactotron = Reactotron
	.setAsyncStorageHandler(AsyncStorage)
	.configure({ name: 'React Native Skeleton' })
	.useReactNative()
	.use(reactotronRedux()) //  <- here i am!
	.connect(); // Don't forget about me!
  
export default reactotron;
console.tron = reactotron;
