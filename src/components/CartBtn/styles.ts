import {StyleSheet, Platform} from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 10,
      right: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      zIndex: 99999,
      backgroundColor: '#00aa5b',
      borderRadius: 60,
      borderWidth: 1,
      borderColor: '#077743',
    },

    detailsContainer: {
      position: 'relative',
    },
    txtContainer: {
      backgroundColor: '#ea1515',
      height: 13,
      width: 13,
      borderRadius: 50,
      position: 'absolute',
      top: -3,
      right: -3,
      zIndex: 99,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontWeight: '700',
      color: '#ffffff',
      fontSize: 10,
    },
    bag: {
      height: 20,
      width: 20,
    },
  });
};
