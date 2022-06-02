import React, {useCallback} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {useTodoStore} from '../../ContextProvider/todoContext';

const ResultsShowScreen = () => {
  const todoStore = useTodoStore();

  const titleSize = Dimensions.get('window').width;

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <SafeAreaView>
          <Image
            style={{width: titleSize, height: titleSize}}
            source={{uri: item.new_url}}
          />
          <View style={styles.section}>
            <Text style={styles.title}> Author: {item.author}</Text>
          </View>
        </SafeAreaView>
      );
    },
    [titleSize],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[todoStore.singlePhoto]}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  section: {
    margin: 5,
  },
  title: {
    fontSize: 18,
    color: '#ff4411',
  },
});

export default ResultsShowScreen;
