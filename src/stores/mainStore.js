import {makeAutoObservable} from 'mobx';

export const mainStore = () => {
  return makeAutoObservable({
    photoList: [],
    isFetching: false,
    singlePhoto: null,

    changeSingle(search_id) {
      const result = this.photoList.find(({id}) => id === search_id);
      this.singlePhoto = result;
    },

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
