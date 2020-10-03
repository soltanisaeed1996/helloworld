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
  const [akbar, setName] = useState('');
  const [asghar, setFamily] = useState('');

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="please type your name"
        //defaultValue={props.name}
        value={akbar}
        onChangeText={(x) => setName(x)}
      />
      <TextInput
        style={{height: 40}}
        placeholder="please type your name"
        //defaultValue={props.family}
        value={asghar}
        onChangeText={(x) => setFamily(x)}
      />
      <Text>
        hello {akbar} {asghar}
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
