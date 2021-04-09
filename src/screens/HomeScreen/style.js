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
    backgroundColor: '#e5e5f7',
  },
  logo: {
    marginHorizontal: 5,
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default styles;
