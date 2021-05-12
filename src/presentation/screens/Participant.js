import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
});

export const Participant = ({route}) => {
  const {participantDetail} = route.params;

  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, flexDirection: 'row'}}>
        <Text>Name: </Text>
        <Text>
          {participantDetail && participantDetail.name
            ? participantDetail.name
            : 'XYZ'}
        </Text>
      </View>
      <View style={{flex: 0.5, alignItems: 'flex-end'}}>
        <Text>Gender: </Text>
        <Text>
          {participantDetail && participantDetail.gender
            ? participantDetail.gender
            : 'ABC'}
        </Text>
      </View>
    </View>
  );
};

export default Participant;
