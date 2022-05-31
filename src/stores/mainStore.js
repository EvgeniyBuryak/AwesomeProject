import {makeAutoObservable} from 'mobx';

export const mainStore = () => {
  return makeAutoObservable({
    photoList: [],
    isFetching: false,

    receivePhotos(payload) {
      this.photoList = [...payload];
      this.isFetching = true;
    },

    get storeDetails() {
      return `We have length list: ${this.photoList.length}!`;
    },

    logStoreDetails() {
      console.log(this.storeDetails);
    },
  });
};
