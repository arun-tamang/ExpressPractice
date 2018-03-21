import axiosInstance from '../utils/apiAxiosInstance';
import { fakeShowsData } from '../constants/fakeDatas';

export async function getShows() {
  // let axiosResponse = await axiosInstance.get('/api/nowshowinginfo');
  // console.log('axiosResponse', axiosResponse.data);
  // return axiosResponse.data;
  return fakeShowsData;
}