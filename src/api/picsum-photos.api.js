import axios from 'axios';

const getList = async () => {
  try {
    const response = await axios.get('https://picsum.photos/v2/list');

    return response.data;
  } catch {
    throw new Error('Error: Список картинок не грузиться!');
  }
};

export {getList};
