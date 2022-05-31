import axios from 'axios';

const getListPixabay = async term => {
  let url = null;
  const API_KEY = '27719451-323b893b9bedcb7dec90b1724';
  // const URL =
  //   'https://pixabay.com/api/?key=' +
  //   API_KEY +
  //   '&q=' +
  //   encodeURIComponent('red roses');
  if (!term) {
    url = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&pretty=true`;
  } else {
    url = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`;
  }

  // console.log("URL: ", URL);

  //   $.getJSON(URL, function(data){
  //     if (parseInt(data.totalHits) > 0)
  //         $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
  //     else
  //         console.log('No hits');
  //     });
  try {
    const response = await axios.get(url);

    return response.data.hits;
  } catch (error) {
    console.log('Error pixabay-photos list api: ' + error);
    throw error;
  }
};

export {getListPixabay};
