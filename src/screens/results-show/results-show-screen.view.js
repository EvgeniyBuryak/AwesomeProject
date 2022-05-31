import React, {useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Button} from 'react-native';
import {useTodoStore} from '../../ContextProvider/todoContext';

const ResultsShowScreen = () => {
  const todoStore = useTodoStore();

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderItem = useCallback(({item}) => {

    return (
      <View>
        {/* <Text>{item.attributes.canonicalTitle}</Text> */}
        {/* <Text style={styles.rating}>Description: {isExist(item.user)}</Text> */}
        <Text style={styles.title}> Author: {item.user}</Text>
        <Image style={styles.image} source={{uri: item.userImageURL}} />
        {item.tags.split(', ').map(e => (
          <Button style={styles.title} title={e} />
        ))}
        {/* <Text style={styles.desciption}>
          Description: {isExist(item.attributes.description)}
        </Text> */}
      </View>
    );
  }, []);

  return (
    <View>
      <FlatList
        data={[todoStore.singlePhoto]}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
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
