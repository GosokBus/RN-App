import {LoginData, LoginResponse} from '../utils/types';
import {getEncryptedStorage} from './../utils/encryptedStorage';
import {UserInfo} from './../utils/types';
import {axiosInstance} from './instance';

const postLogin = async ({id, pw}: LoginData): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/auth/login', {
    loginId: id,
    password: pw,
  });
  return response.data;
};

const getRefresh = async () => {
  const refreshToken = await getEncryptedStorage('refreshToken');

  const response = await axiosInstance.post('/auth/refresh', {
    refreshToken: refreshToken,
  });

  return response.data;
};

const getUserInfo = async (userId: string): Promise<UserInfo> => {
  const response = await axiosInstance.get(`/user/${userId}`);

  return response.data;
};

export {postLogin, getRefresh, getUserInfo};
