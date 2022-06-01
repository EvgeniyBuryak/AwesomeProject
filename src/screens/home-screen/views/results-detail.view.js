import React from 'react';
import {ScrollView, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ResultsDetail = ({num, item}) => {
  // const isExist = result => {
  //   return result ?? 'не установлено';
  // };
  const screenWidth = Dimensions.get('window').width;
  const tileSize = screenWidth / num - styles.container.marginLeft * 1.8;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.user}</Text>
      <Image
        style={{height: tileSize, width: tileSize}}
        source={{uri: item.userImageURL}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: 'black',
  },
  container: {
    marginTop: 15,
    marginLeft: 15,
  },
  image: {
    width: 180,
    height: 260,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ResultsDetail;
