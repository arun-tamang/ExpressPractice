import axios from 'axios';

import { BASE_URL } from '../constants/publicApiUrls';

import refreshAccessToken from '../services/authServices/refreshAccessToken';

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export default axiosInstance;