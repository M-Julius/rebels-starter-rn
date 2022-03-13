import React from 'react';
import { Text } from 'react-native';

import { Colors } from 'consts';

import Style from './style';

const StaticText = ({
  children,
  text,
  align = 'left',
  color = Colors.text.black,
  size = 's',
  weight = 'bold',
  mb = 0,
  mt = 0,
  mr = 0,
  ml = 0,
  numberOfLines = 0,
  spacing = 0,
  decoration = 'none',
  onPress,
  style,
}) => {
  return (
    <Text
      style={{
        ...Style[weight],
        ...Style[size],
        ...Style.color(color),
        ...Style.align(align),
        ...Style.mb(mb),
        ...Style.mt(mt),
        ...Style.mr(mr),
        ...Style.ml(ml),
        ...Style.spacing(spacing),
        ...Style.decoration(decoration),
        ...style,
      }}
      numberOfLines={numberOfLines}
      ellipsizeMode='tail'
      onPress={onPress}
      // maxLength
    >
      {children || text}
    </Text>
  )
}



export default StaticText;