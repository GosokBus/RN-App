import {ExpInfo, RecentExp} from '../utils/types';
import {AllExp} from './../utils/types';
import {axiosInstance} from './instance';

export const getExpInfo = async (userId: string): Promise<ExpInfo> => {
  const response = await axiosInstance.get(`/exp/${userId}/expDetails`);

  return response.data;
};

export const getRecentExp = async (userId: string): Promise<RecentExp> => {
  const response = await axiosInstance.get(`/recentExp/${userId}`);

  return response.data;
};

export const getAllExp = async (userId: string): Promise<AllExp> => {
  const response = await axiosInstance.get(`exp/${userId}/all`);
  return response.data;
};
