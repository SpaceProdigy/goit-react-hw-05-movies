import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  language: 'en-US',
  api_key: '0fa5d57869c0fc46ab6b2702ad9e66fe',
};

export const apiMovies = async (pachName = '', search = '') => {
  try {
    const { data } = await axios.get(`${pachName}${search}`);
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
