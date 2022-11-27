import axios from 'axios';
import to from 'await-to-js';

const http = axios.create({ baseURL: 'https://swapi.dev/api/' });

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // tslint:disable-next-line:no-console
    console.error(error);
    return Promise.reject(error);
  },
);

export const getCharacters = async (search:string, page:string) => {
	const urlGetData = search ? `/people/?search=${search}&page=${page}` : `/people/?page=${page}`;
  //console.log('http.ts - 19  >>>>>>>>> urlGetData: ', urlGetData);
  const [error, response] = await to(http.get(urlGetData));
  if (error) {
    throw error;
  }
  return response;
};

export default http;
