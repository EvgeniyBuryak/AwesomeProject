import React from 'react';
import {ScrollView, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Observer} from 'mobx-react';

const ResultsDetail = ({item}) => {
  // const isExist = result => {
  //   return result ?? 'не установлено';
  // };
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 2;
  // const tileSize = screenWidth / numColumns - styles.container.marginLeft * 1.5;
  const tileSize = screenWidth; // - styles.container.marginLeft * 2;

  // return Observer(() => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.user}</Text>
      <Image
        style={{height: tileSize, width: tileSize}}
        // style={{aspectRatio: 1, flex: 1 / numColumns}}
        source={{uri: item.userImageURL}}
      />
    </ScrollView>
  );
  // });
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
    marginRight: 15,
  },
  image: {
    width: 180,
    height: 260,
    marginVertical: 5,
    borderRadius: 5,
    aspectRatio: 1,
    flex: 1 / 4,
  },
  // image: {
  //   width: 250,
  //   height: 360,
  //   // borderRadius: 50,
  // },
});

export default ResultsDetail;
