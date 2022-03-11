import React, { useState } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Loader } from 'components';

import Styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoaderPreview = props => {
  const [overlayLoading, setOverlayLoading] = useState(false);
  const [fullLoading, setFullLoading] = useState(false);

  return (
    <View style={ Styles.container }>

      <Loader size='small' />
      <Loader />
      <Loader size='big' />

      <Loader overlay description='Please wait overlay...' onPressForceClose={ () => setOverlayLoading(false) } active={ overlayLoading } />
      <TouchableOpacity style={ { padding: 10, marginTop: 10, backgroundColor: 'tomato', borderRadius: 10 } } onPress={ () => setOverlayLoading(true) }>
        <Text>Overlay Loading</Text>
      </TouchableOpacity>

      <Loader full description='Please wait full...' onPressForceClose={ () => setFullLoading(false) } active={ fullLoading } />
      <TouchableOpacity style={ { padding: 10, marginTop: 10, backgroundColor: 'tomato', borderRadius: 10 } } onPress={ () => setFullLoading(true) }>
        <Text>Full Page Loading</Text>
      </TouchableOpacity>

      <TouchableOpacity style={ { padding: 10, marginTop: 10, backgroundColor: 'tomato', borderRadius: 10 } } onPress={ () => Actions.pop() }>
        <Text>back</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoaderPreview;
