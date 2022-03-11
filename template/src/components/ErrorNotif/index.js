import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Colors,
} from 'consts';
import {
  HooksHelper,
} from 'helpers';
import {
  actions,
} from 'store';

import Styles from './style';

const ErrorNotif = props => {
  const errorMessageProps = useSelector(HooksHelper.useImmutableSelector(state => state.error.get('content_message')));

  const dismissErrorProps = HooksHelper.useCustomDispatch(actions.ErrorAction.dismissError);

  const timeHandler = useRef(0);

  useEffect(() => {
    if (errorMessageProps) {
      timeHandler.current = setTimeout(() => {
        dismissErrorProps();
      }, 3000);
    }

    return () => {
      clearTimeout(timeHandler.current);
      timeHandler.current = 0;
    };
  }, [errorMessageProps]); // eslint-disable-line react-hooks/exhaustive-deps

  const onPressDismissError = () => {
    dismissErrorProps();
  };

  const renderMessage = () => {
    let errorMessage = errorMessageProps && errorMessageProps.size > 0 ? errorMessageProps.toJS() : errorMessageProps;
    let message = (Array.isArray(errorMessage) ? errorMessage.join(', ') : errorMessage) || 'Request failed.';

    switch (message) {
      case 'TypeError: Network request failed':
        message = 'Failed to connect to server, please check your connection.';
        break;
    }

    return message;
  };

  if (errorMessageProps) {
    return (
      <View style={ [Styles.container, props.style] }>

        <Ionicons style={ Styles.dismissButton.text } name={ 'ios-alert' } color={ Colors.red.preset1 } size={ 20 } />

        <View style={ Styles.message.container }>
          <Text style={ Styles.message.text }>{ renderMessage() }</Text>
        </View>

        <TouchableOpacity style={ Styles.dismissButton.container } onPress={ onPressDismissError }>
          <Ionicons style={ Styles.dismissButton.text } name={ 'ios-close' } color={ Colors.red.preset1 } size={ 35 } />
        </TouchableOpacity>

      </View>
    );
  }

  return null;
};

export default ErrorNotif;
