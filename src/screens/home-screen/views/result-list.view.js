import React, {useCallback} from 'react';
import ResultsDetail from './results-detail.view';
import {withNavigation} from 'react-navigation';
import {
  View,
  StyleSheet,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const ResultsList = ({results, navigation, refreshing, onRefresh}) => {
  //   const isExist = result => {
  //     return result ?? 'не установлено';
  //   };
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
          <ResultsDetail item={item} />
        </TouchableOpacity>
      );
    },
    [navigation],
  );
  //   const renderItem = useCallback(({item}) => {
  //     return (
  //       <View>
  //         <Text style={styles.titleSize}>{item.user}</Text>
  //         {/* <Image style={styles.image} source={require(item.url)} /> */}
  //         <Image style={styles.image} source={{uri: item.userImageURL}} />
  //         {/* <Image style={styles.image} source={{uri: isExist(item.userImageURL)}} /> */}
  //         {/* <Image
  //           style={styles.image}
  //           source={{uri: 'https://loremflickr.com/320/240/paris,girl/all'}}
  //         /> */}
  //       </View>
  //     );
  //   }, []);
  return (
    <View>
      <FlatList
        data={results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 360,
    // borderRadius: 50,
  },
  titleSize: {
    fontSize: 20,
    margin: 5,
  },
});

export default withNavigation(ResultsList);
