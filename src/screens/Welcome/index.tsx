import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import getStyles from './styles';
import {Button} from '../../components/Button';

const Welcome = ({...props}) => {
  const styles = getStyles();
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate('Home' as never);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>Welcome</Text>
        <Button text="Go to Home" onPress={handleNextPage} />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
