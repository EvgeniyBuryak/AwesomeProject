import React, {useState, useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getListPixabay} from '../../api/pixabay-photos.api';
import ResultsList from './views/result-list.view';
import SearchBar from './views/search-bar.view';
// import Toast from 'react-native-easy-toast';

const HomeScreen = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const toastRef = useRef(null);
  const getResults = async (searchTerm = 'space') => {
    setRefreshing(true);

    try {
      const result = await getListPixabay(searchTerm);
      setResults(result);
    } catch (err) {
      toastRef.current.show('Something wrong', 2000);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefresh = useCallback(() => {
    getResults(term);
  }, [term]);

  const handleTermChange = useCallback(newTerm => {
    //console.log(newTerm);
    setTerm(newTerm);
  }, []);

  const handleTermSubmit = useCallback(() => {
    getResults(term);
  }, [term]);

  useEffect(() => {
    getResults();
  }, []);
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={handleTermChange}
        onTermSubmit={handleTermSubmit}
      />
      {/* <Toast ref={toastRef} position="top" /> */}
      <Text style={styles.headerVacancy}>Animals:</Text>
      <ResultsList
        results={results}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
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
