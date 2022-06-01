import React, {useCallback} from 'react';
import ResultsDetail from './results-detail.view';
import {withNavigation} from 'react-navigation';
import {useTodoStore} from '../../../ContextProvider/todoContext';
import {Observer} from 'mobx-react';
import {View, RefreshControl, FlatList, TouchableOpacity} from 'react-native';

const ResultsList = ({navigation, refreshing, onRefresh}) => {
  const todoStore = useTodoStore();

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

  // return Observer(() => {
  return (
    <View>
      <FlatList
        data={todoStore.photoList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
  // });
};

export default withNavigation(ResultsList);
