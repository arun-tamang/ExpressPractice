// import axiosInstance from '../utils/webAxiosInstance';
import * as showsService from '../../services/showsService';

export async function getShows() {  
  return showsService.getShows();
}
