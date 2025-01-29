export interface LoginData {
  id: string;
  pw: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: string;
}

export interface UserInfo {
  userName: string;
  level: string;
  userId: string;
  part: string;
  joinDay: string;
}

export interface ExpInfo {
  totalExp: number;
  previousYearsTotalExp: number;
  previousYearsTotalExpMax: number;
  expThisYear: number;
  expThisYearMax: number;
  nextLevelName: string;
  remainingExp: number;
  bucketSize: number;
  experienceInBucket: number;
}

export interface RecentExp {
  exp: string;
  quest: string;
  createdAt: string;
}

export interface Quest {
  questName: string;
  maxScore: number;
  midScore: number;
}

export interface QuestList {
  userId: string;
  department: string;
  leaderQuests: Quest[];
  partQuests: Quest[];
}

export interface LeaderQuestDetail {
  monthOrWeek: 'Month' | 'Week' | undefined;
  timeValue: string;
  achievement: 'Max' | 'Median';
}

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PartQuest {
  questName: string;
  rewardExp: number;
  week: string;
}
export interface Evaluation {
  grade: string;
  rewardExp: string;
}
export interface LeaderQuest {
  questName: string;
  rewardExp: string;
  timeType: string;
  timeValue: string;
}
export interface CompanyProject {
  projectName: string;
  rewardExp: string;
}
export interface AllExp {
  partQuests: PartQuest[];
  firstEvaluation: Evaluation[];
  secondEvaluation: Evaluation[];
  leaderQuests: LeaderQuest[];
  companyProjects: CompanyProject[];
}
