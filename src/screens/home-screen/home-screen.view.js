import React, {useState, useEffect, useCallback, useRef} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Switch} from 'react-native';
import {getListPhotos} from '../../api/picsum-photos.api';
import ResultsList from './views/result-list.view';
import SearchBar from './views/search-bar.view';
import {useTodoStore} from '../../ContextProvider/todoContext';
import {Observer} from 'mobx-react';
import Toast from 'react-native-easy-toast';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toastRef = useRef(null);
  const todoStore = useTodoStore();

  const fetchData = async searchTerm => {
    setRefreshing(true);

    try {
      const result = await getListPhotos();

      if (searchTerm) {
        await todoStore.searchByTerm(searchTerm);
      } else {
        await todoStore.receivePhotos(result);
      }

    } catch (error) {
      toastRef.current.show('Something wrong : ' + error, 5000);

      if (searchTerm) {
        await todoStore.searchByTerm(searchTerm);
      } else {
        await todoStore.receivePhotos();
      }

      throw error;
    } finally {
      setRefreshing(false);
    }
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleRefresh = useCallback(() => fetchData(term), [term]);

  const handleTermChange = useCallback(newTerm => setTerm(newTerm), []);

  const handleTermSubmit = useCallback(() => fetchData(term), [term]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Observer>
      {() => {
        return (
          <SafeAreaView style={styles.container}>
            <SearchBar
              term={term}
              onTermChange={handleTermChange}
              onTermSubmit={handleTermSubmit}
            />
            <View style={styles.switch}>
              <Text>Toggle</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
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
            <ResultsList
              num={isEnabled ? 2 : 1}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </SafeAreaView>
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
  switch: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 15,
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#111',
  },
});

export default HomeScreen;
