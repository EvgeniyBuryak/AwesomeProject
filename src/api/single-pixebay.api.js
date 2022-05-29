import axios from 'axios';

const getSinglePixabay = async id => {
  const API_KEY = '27719451-323b893b9bedcb7dec90b1724';

  const URL = `https://pixabay.com/api/?key=${API_KEY}&id=${id}`;

  //   const requestSingleAnime = axios.create({
  //     baseURL: 'https://kitsu.io/api/edge/anime',
  //     headers: {'content-type': 'application/vnd.api+json'},
  //     params: {
  //       'filter[id]': id,
  //     },
  //   });

  try {
    const response = await axios.get(URL);

    return response.data.hits;
  } catch {
    throw new Error('Error: Список картинок не грузиться!');
  }
};

export {getSinglePixabay};
