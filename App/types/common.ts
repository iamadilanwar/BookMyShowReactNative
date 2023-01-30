export interface Header {
  title: string;
  titleAlight: string;
  subTitle: string
}

export interface HomeSliceState {
  recommended: RecommendedType[] ,
  liveEvents: LiveEventsType[],
  laughterTherapy: LaughterTherapyType[],
  latestPlayList: LatestPlayListType[],
  popularEvents: PopularEventsType[],
  gameSports: GameSportsType[],
  bestEvents: BestEventType[],
  loading: boolean;
}
export interface BestEventType {
  image:string
}
export interface RecommendedType {
  tittle: string;
  image: string;
}
export interface LiveEventsType {
  tittle: string;
  image: string;
  location: string;
}
export interface LaughterTherapyType {
  tittle: string;
  image: string;
  location: string;
}
export interface LatestPlayListType {
  tittle: string;
  image: string;
  language: string;
}
export interface PopularEventsType {
  tittle: string;
  image: string;
  type: string;
}
export interface GameSportsType {
  tittle: string;
  image: string;
  type: string;
}