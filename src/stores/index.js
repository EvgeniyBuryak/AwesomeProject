import {mainStore} from './mainStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const stores = {
  mainStore,
};

export const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (error) {
    // saving error
    console.log('Something wrong with storeData : ' + error);
    throw error;
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    // error reading value
    console.log('Something wrong with getData : ' + error);
    throw error;
  }
};
