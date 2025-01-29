import {useMutation, useQuery} from 'react-query';
import {getRefresh, getUserInfo, postLogin} from '../api/auth';
import {axiosInstance} from '../api/instance';
import useUserStore from '../store/useUserStore';
import {setEncryptedStorage} from './../utils/encryptedStorage';

export function useAuth() {
  const {setUserId, setUserInfo, userInfo} = useUserStore();
  const loginMutation = useMutation({
    mutationFn: postLogin,
    onSuccess: async ({accessToken, refreshToken, userId}) => {
      setEncryptedStorage('refreshToken', refreshToken);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      setUserId(userId);
      console.log('id:', userId);
    },
  });

  const refreshQuery = useQuery({
    queryKey: ['auth', 'refreshToken'],
    queryFn: getRefresh,
    staleTime: 1000 * 60 * 30,
    refetchInterval: 1000 * 60 * 30,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
    onSuccess: data => {
      setEncryptedStorage('refreshToken', data.refreshToken);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
      setUserId(data.userId);
    },
    onError: error => {
      console.log(error);
    },
  });

  const userInfoQuery = useQuery({
    queryKey: ['auth', 'user'],
    queryFn: () => getUserInfo(userInfo.userId),
    enabled:
      !!userInfo.userId &&
      !!axiosInstance.defaults.headers.common.Authorization,
    onSuccess: data => {
      setUserInfo({
        userName: data.userName,
        level: data.level,
        userId: data.userId,
        part: data.part,
        joinDay: data.joinDay,
      });
    },
  });

  const isLoggedIn = !!axiosInstance.defaults.headers.common.Authorization;

  return {loginMutation, refreshQuery, isLoggedIn, userInfoQuery};
}
