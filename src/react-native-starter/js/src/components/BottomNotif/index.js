import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import {
  HooksHelper,
} from 'helpers';
import {
  actions,
} from 'store';

import Styles from './style';

const BottomNotif = props => {
  const bottomNotifProps = useSelector(HooksHelper.useImmutableSelector(state => state.bottomNotif.get('bottomNotif')));

  const dismissBottomNotifProps = HooksHelper.useCustomDispatch(actions.BottomNotifAction.dismissBottomNotif);

  const timeHandler = useRef(0);

  useEffect(() => {
    if (bottomNotifProps) {
      timeHandler.current = setTimeout(() => {
        dismissBottomNotifProps();
      }, 3000);
    }

    return () => {
      clearTimeout(timeHandler.current);
      timeHandler.current = 0;
    };
  }, [bottomNotifProps]); // eslint-disable-line react-hooks/exhaustive-deps

  if (bottomNotifProps) {
    return (
      <View style={ Styles.container }>
        <Text style={ Styles.text }>{ bottomNotifProps }</Text>
      </View>
    );
  }

  return null;
};

export default BottomNotif;
