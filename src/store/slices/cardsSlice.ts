import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

export interface CardType {
    id: number;
    name: string;
    number: string;
    expiry: string;
    cvv: string;
    balance: number;
    frozen?: boolean;
}

interface CardsState {
    cards: CardType[];
    loading: boolean;
    error: string | null;
}

const initialState: CardsState = {
    cards: [],
    loading: false,
    error: null,
};

export const fetchCards = createAsyncThunk<CardType[]>('cards/fetchCards', async () => {
    const res = await fetch('/api/cards'); // your MSW or real endpoint
    if (!res.ok) throw new Error('Failed to fetch cards');
    return await res.json();
});

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        toggleFreezeCard: (state, action: PayloadAction<number>) => {
            const card = state.cards.find((c) => c.id === action.payload);
            if (card) card.frozen = !card.frozen;
        },
        addCard: (state, action: PayloadAction<CardType>) => {
            state.cards.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.loading = false;
                state.cards = action.payload;
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch cards';
            });
    },
});

export const { toggleFreezeCard, addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
