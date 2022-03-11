import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';

import Styles from './style';

const ResourceScreen = props => {
  const [title, setTitle] = useState(props.propsName ? props.propsName : 'Resource Screen');
  const [isLoading, setIsLoading] = useState(false);

  const onPress = useCallback(
    () => {
      console.log('press')
      setIsLoading(true)
    }, 
    []
  );
  
  return (
    <View style={ Styles.container }>
      <Text style={ Styles.text } onPress={ Actions['loader-preview'] }>
        // <Text style={ Styles.text } onPress={ Actions['skeleton-preview'] }>
        { title }
      </Text>
      <Button isLoading={isLoading} onPress={onPress} text={title}/>
    </View>
  );
};

export default ResourceScreen;
