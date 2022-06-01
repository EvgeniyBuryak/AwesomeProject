import React, {useCallback, useState} from 'react';
import ResultsDetail from './results-detail.view';
import {withNavigation} from 'react-navigation';
import {useTodoStore} from '../../../ContextProvider/todoContext';
import {Observer} from 'mobx-react';
import {
  View,
  RefreshControl,
  FlatList,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';

const ResultsList = ({navigation, refreshing, onRefresh}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const todoStore = useTodoStore();

  console.log('Toggle : ' + todoStore.numToogle);
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            todoStore.saveFoundAuthor(item.id);
            navigation.navigate('ResultsShow');
          }}>
          <ResultsDetail item={item} />
        </TouchableOpacity>
      );
    },
    [navigation, todoStore],
  );

  const toggleSwitch = () =>
    setIsEnabled(previousState => {
      // todoStore.toggleSwitch();
      return !previousState;
    });
  // return Observer(() => {
  return (
    // <View style={styles.container}>
    <View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <FlatList
        data={todoStore.photoList}
        keyExtractor={keyExtractor}
        numColumns={2}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
  // });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    aspectRatio: 1,
    flex: 1 / 2,
  },
});

export default withNavigation(ResultsList);
