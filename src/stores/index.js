import {mainStore} from './mainStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const stores = {
  mainStore,
  // optionsStore,
  // ButtonStore : mainStore.ButtonStore,
  // FioStore : mainStore.FioStore,
  // EmailStore : mainStore.EmailStore
};

export const storeData = async value => {
  try {
    // console.log(value);
    const jsonValue = JSON.stringify(value);
    // console.log(jsonValue);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    // saving error
    console.log('Something wrong with storeData : ' + e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    // console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('Something wrong with getData : ' + e);
  }
};
