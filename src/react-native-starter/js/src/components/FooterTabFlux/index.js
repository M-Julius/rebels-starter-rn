import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Styles from './style';

const FooterTabFlux = props => {
  let color = props.focused ? 'pink' : 'black';
  let fontWeight = props.focused ? '700' : '500';

  return (
    <View style={ Styles.tabBar }>
      {
        props.iconName && (
          <Icon style={ { color } } name={ props.iconName } size={ 20 }/>
        )
      }
      {
        props.title && (
          <Text style={ { color, fontSize: 12, fontWeight } }>{ props.title }</Text>
        )
      }
    </View>
  );
};

export default FooterTabFlux;
