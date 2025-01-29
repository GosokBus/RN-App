import {Post} from '../utils/types';
import {axiosInstance} from './instance';
export const getAllPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get('/post');
  return response.data;
};
