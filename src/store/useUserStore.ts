import {create} from 'zustand';

export interface UserInfo {
  userName: string;
  level: string;
  userId: string;
  part: string;
  joinDay: string;
}

interface UserState {
  userInfo: UserInfo;
  setUserId: (userId: UserInfo['userId']) => void;
  setUserInfo: (userInfo: UserInfo) => void;
}

const useUserStore = create<UserState>(set => ({
  userInfo: {userName: '', level: '', userId: '', part: '', joinDay: ''},
  setUserId: userId =>
    set(state => ({
      userInfo: {
        ...state.userInfo,
        userId, // userInfo 내 userId만 업데이트
      },
    })),
  setUserInfo: userInfo => set({userInfo}),
}));

export default useUserStore;
