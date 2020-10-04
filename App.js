/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

const pizzaholder = (props) => {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="please type your name"
        value={name}
        onChangeText={(x) => setName(x)}
      />
      <TextInput
        style={{height: 40}}
        placeholder="please type your name"
        value={family}
        onChangeText={(x) => setFamily(x)}
      />
      <Text>
        hello {name} {family}
      </Text>
      <Button
        onPress={() => {
          setFamily('');
          setName('');
        }}
        title="reset"
      />
    </View>
  );
};
export default pizzaholder;
