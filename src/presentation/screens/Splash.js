import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, Image} from 'react-native';
import {useQuery} from '@apollo/client';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GET_PARTICIPANTS} from '../../data/queries';
import splash from '../../../assets/images/splash.png';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash: {
    width: width / 2,
    height: width / 2,
    resizeMode: 'center',
  },
});

export const Splash = () => {
  const {data} = useQuery(GET_PARTICIPANTS);
  const navigation = useNavigation();

  useEffect(() => {
    if (data && data.characters) {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Participants'}],
          }),
        );
      }, 2000);
    }
  }, [navigation, data]);

  /*TODO TASK 02*/
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <Image source={splash} style={styles.splash} />
    </SafeAreaView>
  );
};

export default Splash;
