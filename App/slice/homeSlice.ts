import { createSlice } from "@reduxjs/toolkit";
import { HomeSliceState } from "../types/common";
import {  RecommendedMovieFakeData ,BestEventFakeData, LiveEventFakeData, LaughterTherapyFakeData, GameSportFakeData, PopularEventFakeData,LatestPlayFakeData} from "./dataStore";

// TODO Add proper types
export const initialState: HomeSliceState = {
  recommended: [],
  liveEvents: [],
  laughterTherapy: [],
  latestPlayList: [],
  popularEvents: [],
  gameSports: [],
  bestEvents:[],
  loading: true,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    renderHome: (state) => {
      state.recommended.push(...RecommendedMovieFakeData);
      state.liveEvents.push(...LiveEventFakeData);
      state.laughterTherapy.push(...LaughterTherapyFakeData);
      state.latestPlayList.push(...LatestPlayFakeData);
      state.popularEvents.push(...PopularEventFakeData);
      state.gameSports.push(...GameSportFakeData);
    //  state.bestEvents.push(...BestEventFakeData);
    },
  },
});

export const { renderHome } =
  homeSlice.actions;

export default homeSlice.reducer;
