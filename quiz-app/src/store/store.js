import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/users/userSlice";
import { quizSlice } from "./slices/quiz/quizSlice";

export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        quiz: quizSlice.reducer
    }
})