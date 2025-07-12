import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface TransactionType {
    label: string;
    date: string;
    amount: string;
    type: 'credit' | 'debit';
    subLabel: string;
}

interface TransactionsState {
    transactions: TransactionType[];
    loading: boolean;
    error: string | null;
}

const initialState: TransactionsState = {
    transactions: [],
    loading: false,
    error: null,
};

export const fetchTransactions = createAsyncThunk<TransactionType[]>('transactions/fetchTransactions', async () => {
    const res = await fetch('/api/transactions');
    if (!res.ok) throw new Error('Failed to fetch transactions');
    return await res.json();
});

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch transactions';
            });
    },
});

export default transactionsSlice.reducer;
