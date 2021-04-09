import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';

const date = new Date();
const year = date.getUTCFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const today = `${month}/${day}/${year}`;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image
          source={require('../../../assets/images/rn-logo.png')}
          style={styles.logo}
        />
        <Image style={styles.menu} />
      </View>
      <View style={styles.topCard}>
        <View>
          <Text style={styles.text}>{today}</Text>
          <Text>temp F</Text>
        </View>
        <Text>Motivational Quote</Text>
      </View>
      <View style={styles.bottomCard}>{/* <View>Latest tweet</View> */}</View>
    </View>
  );
};

export default HomeScreen;
