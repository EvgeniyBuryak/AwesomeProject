import axios from 'axios';

const getListPixabay = async term => {
  const API_KEY = '27719451-323b893b9bedcb7dec90b1724';
  // const URL =
  //   'https://pixabay.com/api/?key=' +
  //   API_KEY +
  //   '&q=' +
  //   encodeURIComponent('red roses');
  // const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`;
  const URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&pretty=true`;
  // console.log("URL: ", URL);

  //   $.getJSON(URL, function(data){
  //     if (parseInt(data.totalHits) > 0)
  //         $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
  //     else
  //         console.log('No hits');
  //     });
  try {
    const response = await axios.get(URL);

    return response.data.hits;
  } catch (error) {
    console.log('Error list api: Список картинок не грузиться!');
    throw error;
  }
};

export {getListPixabay};
