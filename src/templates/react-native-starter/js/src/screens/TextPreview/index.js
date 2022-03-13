import React, { useState } from 'react';
import {
  View,
} from 'react-native';

import Languages from 'languages'
import { Container, Text } from 'components';
import {Colors} from 'consts';

import Styles from './style';

const TextScreen = props => {
  return (
    <Container style={ Styles.container }>
      <Text
        mb={10}
        align='center'
        weight='regular'
      >
        {Languages.intro.morningGreetings} <Text 
                                              color={Colors.red.default}
                                              weight='bold'
                                              text={Languages.intro.howAreYouToday}
                                            />
      </Text>

      <Text
        size='xl'
        color={Colors.blue.default}
        text={Languages.intro.afternoonGreetings}
        mt={20}
      />

      <Text 
        color={Colors.black.default}
        text={Languages.loremIpsum}
        mt={20}
      />
      <Text 
        color={Colors.black.default}
        numberOfLines={3}
        mt={20}
        text={Languages.loremIpsum}
      />
    </Container>
  );
};

export default TextScreen;
