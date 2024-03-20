import { createSlice } from '@reduxjs/toolkit';

const initialRanking = {
    ranking : [],
}

export const rankingSlice = createSlice({
  name: 'ranking',
  initialState: initialRanking,
  reducers: {
      SET_RANKING: (state, { payload }) => {
          state.ranking = payload
      }
  }
})

export const { SET_RANKING } = rankingSlice.actions