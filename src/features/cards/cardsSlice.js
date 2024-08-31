import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cards: {}
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    addCard(state, action) {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
})

export const { addCard } = cardsSlice.actions;

export const cardsSelectorById = (id) => (state) => state.cards.cards[id];

export const otherCardsSelector = (state) => state.cards;

export default cardsSlice.reducer;