import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to city 17!</Text>
      <Text style={styles.instructions}>
        This is a React Native snapshot test.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    color: '#333',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default Intro;
