import React from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import getStyles from './styles';

type LoadingScreenProps = {};

const LoadingScreen = ({...props}: LoadingScreenProps) => {
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ActivityIndicator color={'#333333'} />
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;
