import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import config from 'react-native-config';
import styles from './style.js';
import Quote from '../../utilities/Quote';

const date = new Date();
const year = date.getUTCFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const today = `${month}/${day}/${year}`;
const quoteApiUrl = config.QUOTE_API;
const weatherApiUrl = config.WEATHER_API;

const HomeScreen = () => {
  console.log('configc', config.QUOTE_API);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [temp, setTemp] = useState();
  const getQuotes = () => {
    fetch(quoteApiUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let randNum = Math.floor(Math.random() * data.length);

        setQuote(data[randNum].text);
        setAuthor(data[randNum].author);
      })
      .catch(e => {
        console.warn(e);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const getTemp = () => {
    fetch(weatherApiUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTemp(
          Math.abs(
            data.data.timelines[0].intervals[0].values.temperature,
          ).toFixed(),
        );
      })
      .catch(e => {
        console.warn(e);
      });
  };

  useEffect(() => {
    getTemp();
  }, []);

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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.text}>Today is: {today}</Text>
          <Text>{temp} °F</Text>
        </View>
        <View style={styles.quoteBox}>
          <Text style={{textAlign: 'center', fontSize: 26}}>
            Quote of The Day
          </Text>
          <Quote text={quote} author={author} />
        </View>
      </View>
      <View style={styles.bottomCard}>{/* <View>Latest tweet</View> */}</View>
    </View>
  );
};

export default HomeScreen;
