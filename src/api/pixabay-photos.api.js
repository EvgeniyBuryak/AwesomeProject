import axios from 'axios';

const getListPixabay = async term => {
  const API_KEY = '27719451-323b893b9bedcb7dec90b1724';
  // const URL =
  //   'https://pixabay.com/api/?key=' +
  //   API_KEY +
  //   '&q=' +
  //   encodeURIComponent('red roses');
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`;

  //   $.getJSON(URL, function(data){
  //     if (parseInt(data.totalHits) > 0)
  //         $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
  //     else
  //         console.log('No hits');
  //     });
  try {
    const response = await axios.get(URL);

    return response.data.hits;
  } catch {
    throw new Error('Error: Список картинок не грузиться!');
  }
};

export {getListPixabay};
