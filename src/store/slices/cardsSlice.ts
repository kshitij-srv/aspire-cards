import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

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
}

const initialState: CardsState = {
    cards: [
        {
            id: 1,
            name: "Mark Henry",
            number: "2736567849872020",
            expiry: "12/20",
            cvv: "123",
            balance: 1000,
            frozen: false,
        },
        {
            id: 2,
            name: "Jane Doe",
            number: "3456756409873344",
            expiry: "11/23",
            cvv: "276",
            balance: 800,
            frozen: false,
        },
        {
            id: 3,
            name: "John Smith",
            number: "8769345608769988",
            expiry: "05/24",
            cvv: "658",
            balance: 1200,
            frozen: false,
        },
    ],
};

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
});

export const { toggleFreezeCard, addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
