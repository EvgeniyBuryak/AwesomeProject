import {makeAutoObservable} from 'mobx';
import {getData, storeData} from './';

export const mainStore = () => {
  return makeAutoObservable({
    photoList: [],
    singlePhoto: null,

    /**
     * Ищем подстроку в именах авторов
     * @param {string} term - подстрока
     */
    async searchByTerm(term) {
      let data = await getData();

      let newList = data.filter(item => {

        let isInclude = item.author.toLowerCase().includes(term.toLowerCase());

        return isInclude;
      });

      this.photoList = newList.length === 0 ? null : [...newList];
    },

    /**
     * Сохраняем значения автора фотографии по id
     * для отображение в отдельном окне
     * @param {number} term_id - id автора
     */
    saveFoundAuthor(term_id) {
      const result = this.photoList.find(({id}) => id === term_id);

      result.new_url = `https://picsum.photos/id/${term_id}/200/300`;

      this.singlePhoto = result;
    },

    /**
     * Cохраняем подгруженные данные из стороннего сервиса по фотографиям
     * Если нет, то из хранилища
     * @param {[]} payload - данные полученные от запроса стороннего сервиса
     */

    async receivePhotos(payload) {
      if (!payload) {
        this.photoList = await getData();
      }

      this.photoList = [...payload];

      // save to store
      storeData([...payload]);
    },
  });
};
