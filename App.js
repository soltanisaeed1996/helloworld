/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const pizzaholder = () => {
  const [name, family, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="please type your name"
        onChangeText={(name) => setText(name)}
      />
      <Text>hello {name}</Text>
    </View>
  );
};
export default pizzaholder;
