/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ImageBackground
          source={require('./assets/images/tic-tac-toe.png')}
          imageStyle={{resizeMode: 'repeat'}}
          style={{flex: 1}}>
          <HomeScreen />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default App;
