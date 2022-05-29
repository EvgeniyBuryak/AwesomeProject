import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {getSinglePixabay} from '../../api/single-pixebay.api';

const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const [results, setResults] = useState(null);

  const isExist = result => {
    return result ?? 'не установлено';
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderItem = useCallback(({item}) => {
    return (
      <View>
        {/* <Text>{item.attributes.canonicalTitle}</Text> */}
        <Text style={styles.rating}>Description: {isExist(item.user)}</Text>
        <Image style={styles.image} source={{uri: item.userImageURL}} />
        {/* <Text style={styles.desciption}>
          Description: {isExist(item.attributes.description)}
        </Text> */}
      </View>
    );
  }, []);

  const getResults = async id => {
    const result = await getSinglePixabay(id);
    setResults(result);
  };

  useEffect(() => {
    getResults(id);
  }, [id]);

  return (
    <View>
      <FlatList
        data={results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 360,
    borderRadius: 50,
  },
  desciption: {
    fontWeight: 'bold',
  },
  rating: {},
});

export default ResultsShowScreen;
