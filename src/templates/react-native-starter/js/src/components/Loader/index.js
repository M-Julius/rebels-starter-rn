import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

import {
  Images,
} from 'consts';

import Styles from './style';

const Loader = props => {
  const {
    active = true,
    size,
    description,
    overlay = false,
    full = false,
    onPressForceClose,
    source = props.full ? Images.loaderIllustration : Images.loader,
    backgroundColor = props.overlay ? 'rgba(255,255,255,0.5)' : props.full ? 'white' : props.backgroundColor,
    style = {}
  } = props;

  //handle timeout
  const [showTimeout, setShowTimeout] = useState(false);
  const [timeoutSetter, setTimeoutSetter] = useState(null);

  useEffect(() => {
    if (active && (overlay || full)) {
      setTimeoutSetter(
        setTimeout(() => {
          setShowTimeout(true);
        }, 3000)
      );
    }
  }, [active]);

  const handlePressForceClose = () => {
    // asyncStore.dispatch({
    //   type: Dispatches.FORCE_LOADING_END,
    // });
    setShowTimeout(false);
    clearTimeout(timeoutSetter);
    if (onPressForceClose) onPressForceClose();
  };

  //custom size
  let indicatorSize = { width: 50, height: 25 };
  if (size === 'small') {
    indicatorSize = { width: 25, height: 17 };
  } else if (size === 'big') {
    indicatorSize = { width: 100, height: 50 };
  }

  //container style
  let containerStyle = { backgroundColor };

  const renderCloseButton = () => {
    if (showTimeout) {
      return (
        <View style={ Styles.closeContainer }>
          <Text style={ { textAlign: 'right', fontWeight: 'bold' } } onPress={ handlePressForceClose }>x</Text>
          <Text>Internet problem? Press close or please wait.</Text>
        </View>
      );
    }
  };

  const renderDescription = () => {
    if (description) {
      return <Text style={ Styles.description }>{ description }</Text>;
    }
  };

  //return null if not active
  if (!active) {
    return null;
  }

  //overlay loading
  if (overlay) {
    return (
      <View style={ [Styles.container, containerStyle] }>

        { renderCloseButton() }

        <Image style={ [indicatorSize, style] } source={ source } />

        { renderDescription() }

      </View>
    );
  }

  //full page loading
  if (full) {
    return (
      <View style={ [Styles.container, containerStyle] }>

        { renderCloseButton() }

        <Image style={ [Styles.loaderIllustrationImage, style] } source={ source } />

        { renderDescription() }

      </View>
    );
  }

  return (
    <Image style={ [indicatorSize, style] } source={ source } />
  );
};

export default Loader;
