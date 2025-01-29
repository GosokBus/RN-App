import {QuestList} from '../utils/types';
import {LeaderQuestDetail} from './../utils/types';
import {axiosInstance} from './instance';
export const getQuestList = async (userId: string): Promise<QuestList> => {
  const response = await axiosInstance.get(`/quest/${userId}`);
  return response.data;
};

export const getLeaderQuest = async (
  userId: string,
  questName: string,
): Promise<LeaderQuestDetail[]> => {
  const response = await axiosInstance.get(
    `/quest/${userId}/leader/${questName}`,
  );
  return response.data;
};
