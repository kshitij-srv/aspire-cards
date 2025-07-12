import { createSlice } from '@reduxjs/toolkit';

export interface TransactionType {
    label: string;
    date: string;
    amount: string;
    type: 'credit' | 'debit';
    subLabel: string;
}

interface TransactionsState {
    transactions: TransactionType[];
}

const initialState: TransactionsState = {
    transactions: [
        {
            label: 'Hamleys',
            date: '20 May 2020',
            amount: '+ S$ 150',
            type: 'credit',
            subLabel: 'Refund on debit card',
        },
        {
            label: 'Hamleys',
            date: '20 May 2020',
            amount: '- S$ 150',
            type: 'debit',
            subLabel: 'Charged to debit card',
        },
    ],
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
});

export default transactionsSlice.reducer;
