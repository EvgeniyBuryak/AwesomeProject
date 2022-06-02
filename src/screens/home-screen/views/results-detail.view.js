import React from 'react';
import {ScrollView, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ResultsDetail = ({num, item}) => {

  const screenWidth = Dimensions.get('window').width;

  const tileSize = screenWidth / num - styles.container.marginLeft * 1.8;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.author}</Text>
      <Image
        style={{height: tileSize, width: tileSize}}
        source={{
          uri: `https://picsum.photos/id/${item.id}/200/300`,
        }}
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
});

export default ResultsDetail;
