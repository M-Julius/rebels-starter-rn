import React, { ReactChild, ReactNode } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

type Props = {
    styles?: object,
  };
const Container: React.FC<Props> = ({
    styles,
    children,
  }) => (
    <View style={styles}>
      {children}
    </View>
  );

export default Container
