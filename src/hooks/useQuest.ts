import {useQuery} from 'react-query';
import {getLeaderQuest, getQuestList} from '../api/quest';
import useUserStore from '../store/useUserStore';

export const useQuest = () => {
  const {userInfo} = useUserStore();

  const questListQuery = useQuery({
    queryKey: ['quest', 'list'],
    queryFn: () => getQuestList(userInfo.userId),
    enabled: !!userInfo.userId,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  return questListQuery;
};
export const useLeaderQuest = (questName: string | undefined) => {
  const {userInfo} = useUserStore();

  const leaderQuestQuery = useQuery({
    queryKey: ['quest', 'list', 'detail', questName],
    queryFn: () => getLeaderQuest(userInfo.userId, questName!),
    enabled: !!userInfo.userId && !!questName,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  return leaderQuestQuery;
};
