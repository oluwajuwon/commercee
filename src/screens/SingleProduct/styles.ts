import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
    },
    safeArea: {
      flex: 1,
    },
    img: {
      width: '100%',
      height: 500,
      // borderWidth: 1,
    },
    details: {
      paddingHorizontal: 15,
    },
    productDetailsTop: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    name: {
      fontSize: 13,
      width: '70%',
    },
    price: {
      color: '#e667a2',
      fontWeight: '700',
      fontSize: 18,
      marginTop: 5,
    },
    btn: {
      marginTop: 10,
    },
    like: {
      height: 15,
      width: 15,
    },
    scroll: {paddingBottom: 50},
  });
};
