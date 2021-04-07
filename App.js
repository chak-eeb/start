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
  Text,
  useColorScheme,
  View,
} from 'react-native';





const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

 

  return (
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View><Text>hi there!</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
