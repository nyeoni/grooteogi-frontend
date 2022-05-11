export type UserEntity = {
  id: number;
  nickname: string;
  imageUrl: string;
};

export type ProfileEntity = UserEntity & {
  email: string;
};

export type ScheduleEntity = {
  scheduleId: number;
  date: string;
  startTime: string;
  endTime: string;
  region: string;
  place: string;
};

export type ReservationEntity = ScheduleEntity & {
  id: number;
  message: string;
  mentor: UserEntity;
  menti: UserEntity;
};

export type ReviewEntity = {
  reviewId: number;
  nickname: string;
  imageUrl: string;
  createAt: string;
  text: string;
};

export type HashtagEntity = {
  hashtagId: number;
  name: string;
};

export enum CreditType {
  DIRECT, //만나서 결제
  DUTCHPAY, //더치페이
  YOURPAY, //사주세요
  MYPAY, //사줄게요
}

export enum CreditTypeKR {
  '만나서 결제',
  '더치페이',
  '사주세요',
  '사줄게요',
}

export type PostEntity = {
  postId: number;
  title: string;
  content: string;
  imageUrl: string;
  createAt: string;
  hashtags: HashtagEntity[];
  creditType: CreditType;
  likes: boolean; // TODO : 논의 필요
  mentor: {
    userId: number;
    nickname: string;
    imageUrl: string;
  };
  schedules: ScheduleEntity[];
  reviews: ReviewEntity[];
};