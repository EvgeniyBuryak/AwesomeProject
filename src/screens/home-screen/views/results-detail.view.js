import React from 'react';
import {ScrollView, Text, StyleSheet, Image, Dimensions} from 'react-native';
import sum from '../../../js/sum.script';

const ResultsDetail = ({num, item}) => {
  console.log('Sum : ' + sum(3, 4));
  const checkImageExist = img => {
    return ( // Ставим заглушку, когда в источнике нету фотографии
      img || 'https://cdn.pixabay.com/user/2022/05/25/18-12-48-180_250x250.jpeg'
    );
  };

  const screenWidth = Dimensions.get('window').width;
  const tileSize = screenWidth / num - styles.container.marginLeft * 1.8;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.user}</Text>
      <Image
        style={{height: tileSize, width: tileSize}}
        source={{uri: checkImageExist(item.userImageURL)}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
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
