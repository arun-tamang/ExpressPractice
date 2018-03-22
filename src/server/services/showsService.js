import axiosInstance from '../utils/apiAxiosInstance';
import Boom from 'boom';

export async function getShows() {
  let axiosResponse = await axiosInstance.get('/api/nowshowinginfo');
  if (axiosResponse && axiosResponse.data) {
    return axiosResponse.data;
  }
  throw Boom.notFound();
}
