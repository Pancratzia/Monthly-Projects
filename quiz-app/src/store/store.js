import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/users/userSlice";
import { quizSlice } from "./slices/quiz/quizSlice";
import { rankingSlice } from "./slices/ranking/rankingSlice";

export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        quiz: quizSlice.reducer,
        ranking: rankingSlice.reducer
    }
})