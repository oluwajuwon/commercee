import {StyleSheet, Platform} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 48,
      zIndex: 99999,
      backgroundColor: '#00aa5b',
    },
    buttonText: {
      color: 'white',
      width: 'auto',
      textAlign: 'center',
      paddingHorizontal: 21,
      fontWeight: '700',
    },
  });
};
