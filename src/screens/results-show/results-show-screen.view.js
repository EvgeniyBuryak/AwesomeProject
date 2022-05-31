import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Button} from 'react-native';
import {getSinglePixabay} from '../../api/single-pixebay.api';
import TagsDetail from './tags-detail.view';

const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const [results, setResults] = useState(null);

  const isExist = result => {
    return result ?? 'не установлено';
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderItem = useCallback(({item}) => {
    // const tags_array = item.tags.split(', ');
    // console.log(`tags : ${Array.isArray(tags_array)}`);
    // for (let tag of tags_array) {
    //   console.log(tag);
    // }

    return (
      <View>
        {/* <Text>{item.attributes.canonicalTitle}</Text> */}
        {/* <Text style={styles.rating}>Description: {isExist(item.user)}</Text> */}
        <Text style={styles.title}> Author: {item.user}</Text>
        <Image style={styles.image} source={{uri: item.userImageURL}} />
        {item.tags.split(', ').map(e => (
          <Button style={styles.title} title={e} />
        ))}
        {/* <TagsDetail list={tags_array} /> */}
        {/* <Text style={styles.desciption}>
          Description: {isExist(item.attributes.description)}
        </Text> */}
      </View>
    );
  }, []);

  const getResults = async () => {
    const result = await getSinglePixabay(id);
    setResults(result);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <View>
      <FlatList
        data={results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      {/* <TagsDetail /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 18,
    color: 'black',
    backgroundColor: 'red',
  },
  image: {
    width: 250,
    height: 360,
    borderRadius: 50,
  },
  // desciption: {
  //   fontWeight: 'bold',
  // },
  // rating: {},
});

export default ResultsShowScreen;
