import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  View,
  Text,
} from 'react-native';
import {
  Router,
  Scene,
  Stack,
  Drawer,
  Actions,
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  ResourceScreen,
  Dashboard,
} from 'screens';
import { FooterTabFlux, Header } from '../components';

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
    <Router >
      <Stack key='root' hideNavBar>
        <Scene // This scene is for header and drawer
          drawer={ true }
          // drawerWidth={ 250 }
          drawerPosition={ 'right' }
          contentComponent={ () => <Text>test</Text> }
          navBar={ () => (
            <Header
              // leftButton='menu'
              // onPressLeftMenu={ () => Actions.drawerOpen() }
              leftText='RN'
              // leftTextStyle={ [{ color: 'pink' }] }
              rightButton='menu'
              // rightButton2='menu'
              onPressRightMenu={ () => {
                Actions.drawerOpen();
              } }
              middleText='Skeleton'
            />
          ) }
        >
          <Scene // This scene wrap all footer tab navigations
            key='main'
            tabs={ true }
            tabBarStyle={ styles.tabBar }
            default='resource'
            showLabel={ false } // Disabled because we are using custom label
            // activeTintColor={ 'pink' }
            // inactiveTintColor={ 'black' }
            tabBarPosition='bottom'
            // activeBackgroundColor='yellow'
            // swipeEnabled={ true }
          >
            <Scene
              key='resource'
              title='Resource'
              iconName='newspaper'
              icon={ FooterTabFlux }
              // hideNavBar={ false }
              component={ ResourceScreen }
              navTransparent={ false }
              initial={ true }
            />
            <Scene
              key='home'
              iconName='home'
              icon={ FooterTabFlux }
              // hideNavBar={ false }
              title={ 'Home' }
              component={ Dashboard }
            />
          </Scene>
        
        </Scene>
        <Scene // This scene is for general nav
          key='dashboard'
          component={ Dashboard }
        />
      </Stack>
    </Router>
  );
};

export default AppRouter;
