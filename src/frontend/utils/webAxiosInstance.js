import axios from 'axios';

import { BASE_URL } from '../constants/apiUrls';

console.log('base url for web is', BASE_URL);

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export default axiosInstance;
