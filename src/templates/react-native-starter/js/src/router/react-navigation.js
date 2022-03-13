import React from 'react';
import {
  StyleSheet,
  PixelRatio,
} from 'react-native';
import {
  Router,
  Scene,
  Stack,
} from 'react-native-router-flux';

import {
  ResourceScreen,
  Dashboard,
} from 'screens';
import { FooterTabFlux } from '../components';

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 1 / PixelRatio.get(),
    backgroundColor: 'ghostwhite',
    opacity: 0.98,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const AppRouter = () => {
  return (
    <Router>
      <Stack key='root' hideNavBar>
      <Scene
          key='main'
          tabs={ true }
          tabBarStyle={ styles.tabBar }
          default='resource'
          showLabel={ false }
          activeTintColor={ 'pink' }
          tabBarPosition='bottom'
          // activeBackgroundColor='yellow'
        >
          <Scene
            key='resource'
            title='Resource'
            iconName='newspaper-o'
            icon={ FooterTabFlux }
            hideNavBar={ false }
            // navBar={ <Header /> }
            component={ ResourceScreen }
            initial={ true }
          />
          <Scene
            key='home'
            iconName='gear'
            icon={ FooterTabFlux }
            hideNavBar={ false }
            title={ 'Home' }
            component={ Dashboard }
            // navBar={ <Header /> }

          />
        </Scene>
        <Scene key='dashboard' component={ Dashboard }/>
      </Stack>
    </Router>
  );
};

export default AppRouter;
