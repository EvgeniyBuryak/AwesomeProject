import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import {Observer} from 'mobx-react';

const ResultsDetail = ({item}) => {
  // const isExist = result => {
  //   return result ?? 'не установлено';
  // };

  // return Observer(() => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.user}</Text>
      <Image style={styles.image} source={{uri: item.userImageURL}} />
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
  },
  image: {
    width: 150,
    height: 260,
    marginVertical: 5,
    borderRadius: 5,
  },
  // image: {
  //   width: 250,
  //   height: 360,
  //   // borderRadius: 50,
  // },
});

export default ResultsDetail;
