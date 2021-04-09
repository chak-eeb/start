import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Quote({text, author}) {
  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{text}</Text>
      <Text style={styles.quoteAuthor}>{author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    backgroundColor: '#ade8f4',
    marginVertical: 10,
    padding: 5,
    borderRadius: 7,
  },
  quoteText: {
    fontSize: 24,
    marginTop: 5,
  },
  quoteAuthor: {
    fontSize: 16,
    color: '#adb5bd',
    marginTop: 5,
  },
});

export default Quote;
