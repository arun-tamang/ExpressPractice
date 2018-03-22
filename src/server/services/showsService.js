import axiosInstance from '../utils/apiAxiosInstance';
// import { fakeShowsData } from '../constants/fakeDatas';

export async function getShows() {
  let axiosResponse = await axiosInstance.get('/api/nowshowinginfo');
  return axiosResponse.data;
  // return fakeShowsData;
}