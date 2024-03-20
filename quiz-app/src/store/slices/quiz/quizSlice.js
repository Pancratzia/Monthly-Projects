import { createSlice } from '@reduxjs/toolkit';

const initialQuiz = {
    selectedQuestions: [],
    actualQuestion: 0,
    score: 0,
    timer: 30,
    timerPercentage: 100,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialQuiz,
  reducers: {
      SET_QUESTIONS: (state, { payload }) => {
          state.actualQuestion = 0;
          state.score = 0;
          state.timer = 30;
          state.timerPercentage = 100;
          state.selectedQuestions = payload;
      },
      SET_SCORE: (state, { payload }) => {
          state.score = payload;
      },
      CHANGE_QUESTION: (state) => {
          state.actualQuestion++;
          state.timer = 30;
          state.timerPercentage = 100;
      },
      SUBSTRACT_ONE_SECOND: (state) => {
          state.timer = state.timer - 1;
          state.timerPercentage = ((state.timer - 1) / 30) * 100;
      },
      RESET_QUIZ_TO_DEFAULT: (state) => {
          state.actualQuestion = 0;
          state.score = 0;
          state.timer = 30;
          state.timerPercentage = 100;
          state.selectedQuestions = [];
      }
  }
})

export const { SET_QUESTIONS, SET_SCORE, CHANGE_QUESTION, SUBSTRACT_ONE_SECOND, RESET_QUIZ_TO_DEFAULT } = quizSlice.actions;