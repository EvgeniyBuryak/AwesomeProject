import {makeAutoObservable} from 'mobx';

export const mainStore = () => {
  return makeAutoObservable({
    photoList: [],
    isFetching: false,
    singlePhoto: null,

    // сохраняем значения определенного автора фотографии
    saveFoundAuthor(search_id) {
      const result = this.photoList.find(({id}) => id === search_id);
      this.singlePhoto = result;
    },

    // сохраняем подгруженных из стороннего сервиса авторов фотографий
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
