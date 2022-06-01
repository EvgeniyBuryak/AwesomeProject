import React, {useState, useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getList} from '../../api/pixabay-photos.api';
import ResultsList from './views/result-list.view';
import SearchBar from './views/search-bar.view';
import {useTodoStore} from '../../ContextProvider/todoContext';
import {Observer} from 'mobx-react';
import Toast, {DURATION} from 'react-native-easy-toast';
import {getData, storeData} from '../../stores';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const toastRef = useRef(null);

  const todoStore = useTodoStore();

  const fetchData = async searchTerm => {

    setRefreshing(true);

    try {
      const apiResult = await getList(searchTerm);

      if (!apiResult) {
        const store = getData();
        todoStore.receivePhotos(store);
      } else {
        storeData(apiResult);
        todoStore.receivePhotos(apiResult);
      }
      // console.log(apiResult);
      // console.log('json : ' + JSON.stringify(todoStore));

      // for (let item of todoStore.photoList) {
      //   console.log(`${item.id} : ${item.user}`);
      // }

      // todoStore.logStoreDetails();
    } catch (error) {
      toastRef.current.show('Something wrong : ' + error, 7000);
      throw error;

    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = useCallback(() => {
    fetchData(term);
  }, [term]);

  const handleTermChange = useCallback(newTerm => {
    setTerm(newTerm);
  }, []);

  const handleTermSubmit = useCallback(() => {
    fetchData(term);
  }, [term]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Observer>
      {() => {
        return (
          <View style={styles.container}>
            <SearchBar
              term={term}
              onTermChange={handleTermChange}
              onTermSubmit={handleTermSubmit}
            />
            <Toast
              ref={toastRef}
              style={styles.error_background}
              position="top"
              positionValue={250}
              fadeInDuration={750}
              fadeOutDuration={1500}
              opacity={0.8}
              textStyle={styles.error}
            />
            <ResultsList refreshing={refreshing} onRefresh={handleRefresh} />
          </View>
        );
      }}
    </Observer>
  );
};

const styles = StyleSheet.create({
  error_background: {
    backgroundColor: '#f2dcbf',
  },
  error: {
    fontSize: 32,
    color: 'black',
  },
  container: {
    // flex: 1,
    backgroundColor: '#111',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeScreen;
