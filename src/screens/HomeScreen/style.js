import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#edf2fb',
  },
  logo: {
    marginHorizontal: 5,
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  topCard: {},
  text: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  quoteBox: {
    marginVertical: 10,
  },
});

export default styles;
