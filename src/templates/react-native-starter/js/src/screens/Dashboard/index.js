import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container } from 'components';

import Styles from './style';

const Dashboard = () => {
  const [data, setData] = useState('Welcome Screen');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');

  return (
    <Container style={ Styles.container }>
      <Text style={ Styles.text } onPress={ () => Actions.pop() }>{ data }</Text>
      <TouchableOpacity
        style={ { padding: 20, marginTop: 20, borderWidth: 0.5, backgroundColor: 'pink', borderRadius: 10 } }
        onPress={ () => setData('Hi, User!') }
      >
        <Text>Press this</Text>
      </TouchableOpacity>
      <View style={ { marginTop: 20, borderRadius: 10, borderWidth: 1, width: 300, padding: 20, backgroundColor: 'white' } }>
        <Text>{ description }</Text>
      </View>
      <TextInput
        style={ { marginTop: 20, borderWidth: 1, padding: 20 } }
        placeholder={ 'Name' }
        placeholderTextColor={ 'grey' }
        onChangeText={ textName => setName(textName) }
        value={ name }
        maxLength={ 10 }
      />
      <TouchableOpacity
        style={ { padding: 20, marginTop: 20, borderWidth: 0.5, backgroundColor: 'white', borderRadius: 10 } }
        onPress={ () => alert(name) }
      >
        <Text>Show state</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Dashboard;
