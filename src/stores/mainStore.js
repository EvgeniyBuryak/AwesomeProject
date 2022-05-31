import {makeAutoObservable} from 'mobx';

export const mainStore = () => {
  return makeAutoObservable({
    photoList: [],
    isFetching: false,

    addPhoto(text) {
      const todo = {
        id: 1,
        user: text,
      };

      this.photoList.push(todo);
    },

    receivePhotos(payload) {
      //   console.log('mainStore user : ' + payload[1].user);
      this.photoList = [...this.photoList, ...payload];

      //   for (let item of this.photos) {
      //     console.log(item);
      //   }
    },

    get storeDetails() {
      return `We have nihuya ${this.photoList.length}!`;
    },

    logStoreDetails() {
      console.log(this.storeDetails);
    },
    // });
  });
};

// class mainStore {
//   @observable photos = [];
//   //   photos: {
//   //       photoList: [],
//   //       isFetching: false,
//   //   }
//   receivePhotos(payload) {
//     this.photos = [...payload];
//   }

//   get storeDetails() {
//     return `We have nihuya ${this.photos.length}!`;
//   }

//   logStoreDetails() {
//     console.log(this.storeDetails);
//   }
// }

// export default new mainStore();
