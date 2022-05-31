import React, {useState, useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getListPixabay} from '../../api/pixabay-photos.api';
import ResultsList from './views/result-list.view';
import SearchBar from './views/search-bar.view';
import {useTodoStore} from '../../ContextProvider/todoContext';
import {Observer} from 'mobx-react';
// import Toast from 'react-native-easy-toast';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  // const toastRef = useRef(null);

  const todoStore = useTodoStore();

  const getResults = async searchTerm => {
    // if (!searchTerm) {
    //   return;
    // }

    setRefreshing(true);

    try {
      // const result = await getListPixabay(searchTerm);
      const result = await getListPixabay();

      todoStore.addPhoto('govno');
      todoStore.receivePhotos(result);

      console.log('json : ' + JSON.stringify(todoStore));

      for (let item of todoStore.photoList) {
        console.log(`${item.id} : ${item.user}`);
      }

      todoStore.logStoreDetails();
    } catch (error) {
      // toastRef.current.show('Something wrong', 2000);
      console.log('mainStore :' + error);
      throw error;
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = useCallback(() => {
    getResults(term);
  }, [term]);

  // const handleTermChange = useCallback(newTerm => {
  //   //console.log(newTerm);
  //   setTerm(newTerm);
  // }, []);

  // const handleTermSubmit = useCallback(() => {
  //   getResults(term);
  // }, [term]);

  useEffect(() => {
    getResults();
  }, []);

  return (
    <Observer>
      {() => {
        return (
          <View style={styles.container}>
            {/* <SearchBar
              term={term}
              onTermChange={handleTermChange}
              onTermSubmit={handleTermSubmit}
            /> */}
            {/* <Toast ref={toastRef} position="top" /> */}
            {/* <Text style={styles.headerVacancy}>Animals:</Text> */}
            <ResultsList refreshing={refreshing} onRefresh={handleRefresh} />
          </View>
        );
      }}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#111',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerVacancy: {
    top: 20,
    margin: 15,
    fontSize: 22,
  },
});

export default HomeScreen;
