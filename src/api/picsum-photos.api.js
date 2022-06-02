import axios from 'axios';

const getListPhotos = async () => {

  const url = 'https://picsum.photos/v2/list?page=2&limit=10';

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {

    if (error.response) {
      console.log('Error data : ' + error.response.data);
      console.log('Error status : ' + error.response.status);
      console.log('Error headers : ' + error.response.headers);
    } else if (error.request) {
      console.log('Error request : ' + error.request);
    } else {
      console.log('Error message : ' + error.message);
    }
    console.log('Error config : ' + JSON.stringify(error.config));

    throw error;
  }
};

export {getListPhotos};
