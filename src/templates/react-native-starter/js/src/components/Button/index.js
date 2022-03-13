import React, { memo, useState } from 'react';
import {
  Text,
  Pressable,
} from 'react-native';
import lodash from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Colors,
} from 'consts';

import Styles from './style';

const Button = ({disabled, isLoading, children, onPress, containerColor, alt, height, width, style, activeOpacity, textColor, fontSize, text, icon, ...props}) => {
  
  const isDisable = () => {
    if (disabled) {
      return true;
    };
    if (isLoading) {
      return true;
    };
  };

  const renderContent = () => {
    if (children) {
      return children;
    };

    if (isLoading) {
      return  <Text style={ Styles.text(textColor, alt, fontSize, isDisable()) }>Loading...</Text>
      //return <Ionicons name={ 'md-close' } color={ Colors.white.default } size={ 18 }/>;
    } else {
      return (
        <>
          <Text style={ Styles.text(textColor, alt, fontSize, isDisable()) }>{ text }</Text>
          {
            icon && <Ionicons name={ icon } color={ iconColor ? iconColor : Colors.white.default } size={ 18 }/>
          }
        </>
      );
    };
  };

  const debouncedOnPress = lodash.debounce(
    () => onPress ? onPress() : null,
    1000,
    {
      leading: true,
      trailing: false,
    }
  );


  return (
    <Pressable
      disabled={ isDisable() }
      style={ [Styles.container(containerColor, alt, height, width, isDisable()), style] }
      onPress={ debouncedOnPress }
      activeOpacity={ activeOpacity ? activeOpacity : 0.2 }
      {...props}
    >
      {renderContent()}
   
    </Pressable>
  );
};

export default memo(Button);
