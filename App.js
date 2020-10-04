/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  ImageBackground,
} from 'react-native';

const pizzaholder = (props) => {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');

  return (
    <View style={{padding: 10}}>
      <ImageBackground style={{alignSelf: 'stretch'}}>
        <ScrollView>
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
          <Text style={{fontSize: 45}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default pizzaholder;
