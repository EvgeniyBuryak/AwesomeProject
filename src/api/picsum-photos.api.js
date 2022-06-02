import axios from 'axios';

const getListPhotos = async term => {
  let url = null;

  if (!term) {
    url = 'https://picsum.photos/v2/list';
  } else {
    url = 'https://picsum.photos/id/0/info';
  }

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log('Error api : ' + error);
    throw error;
  }
};

export {getListPhotos};
