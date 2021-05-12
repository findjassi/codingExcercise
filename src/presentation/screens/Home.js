import React from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_PARTICIPANTS} from '../../data/queries';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  participantList: {
    padding: 20,
  },
  participant: {
    padding: 20,
  },
});

export const Home = ({navigation}) => {
  const {data} = useQuery(GET_PARTICIPANTS);
  /*TODO TASK 03*/
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {!!data && !!data.characters.results && (
        <FlatList
          style={styles.participantList}
          data={data.characters.results}
          renderItem={({item}) => (
            /*TODO TASK 04*/
            <TouchableOpacity
              style={styles.participant}
              onPress={() => {
                /* 1. Navigate to the Participant route with params */
                navigation.navigate('Participant', {
                  participantDetail: item,
                });
              }}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
