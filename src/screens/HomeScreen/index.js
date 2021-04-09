import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';
import Quote from '../../utilities/Quote';

const date = new Date();
const year = date.getUTCFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const today = `${month}/${day}/${year}`;
const apiURL = 'https://type.fit/api/quotes';

const HomeScreen = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuotes = () => {
    fetch(apiURL)
      .then(function (response) {
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
        <View style={styles.quoteBox}>
          <Text style={{textAlign: 'center'}}>Quote of The Day</Text>
          <Quote text={quote} author={author} />
        </View>
      </View>
      <View style={styles.bottomCard}>{/* <View>Latest tweet</View> */}</View>
    </View>
  );
};

export default HomeScreen;
