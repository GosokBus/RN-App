import {useQuery} from 'react-query';
import {getAllPosts} from './../api/board';

export const useBoard = () => {
  const boardQuery = useQuery({
    queryKey: ['board', 'all'],
    queryFn: getAllPosts,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
  return boardQuery;
};
