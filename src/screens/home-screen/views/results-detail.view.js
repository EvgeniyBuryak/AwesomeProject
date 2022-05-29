import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({item}) => {
  const isExist = result => {
    return result ?? 'не установлено';
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.user}</Text>
      <Image style={styles.image} source={{uri: item.userImageURL}} />
      {/* <Text style={styles.description}>Description: { isExist(result.attributes.description).substring(0, 150) }</Text> */}
      {/* <Text style={styles.rating}>Average Rating: { isExist(result.attributes.averageRating) }</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontWeight: 'bold',
  },
  rating: {
    marginVertical: 5,
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
});

export default ResultsDetail;
