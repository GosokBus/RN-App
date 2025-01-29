import {useQuery} from 'react-query';
import {getAllExp, getExpInfo, getRecentExp} from '../api/exp';
import useUserStore from '../store/useUserStore';

export function useExp() {
  const {userInfo} = useUserStore();
  const detailExpQuery = useQuery({
    queryKey: ['exp', 'detail'],
    queryFn: () => getExpInfo(userInfo.userId),
    enabled: !!userInfo.userId,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  const recentExpQuery = useQuery({
    queryKey: ['exp', 'recent'],
    queryFn: () => getRecentExp(userInfo.userId),
    enabled: !!userInfo.userId,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  const allExpQuery = useQuery({
    queryKey: ['exp', 'all'],
    queryFn: () => getAllExp(userInfo.userId),
    enabled: !!userInfo.userId,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
  return {detailExpQuery, recentExpQuery, allExpQuery};
}
