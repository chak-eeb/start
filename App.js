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
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
const App= () => {
  return (
    <SafeAreaView >
      <StatusBar  />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});
export default App;
