import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
