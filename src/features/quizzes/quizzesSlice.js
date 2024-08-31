import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quizzes: {}
}

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: initialState,
  reducers: {
    addQuiz(state, action) {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
})

export const quizzesSelector = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer