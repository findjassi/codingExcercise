import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Participant = props => {
  return (
    <View style={styles.container}>
      <Text>Name: </Text>
      <Text>{'Insert participant name here'}</Text>
      <Text>Gender: </Text>
      <Text>{'Insert participant gender here'}</Text>
    </View>
  );
};

export default Participant;
