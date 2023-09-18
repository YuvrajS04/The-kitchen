import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    amount: number;
}

const initialState: CounterState = {
    amount: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1;
        },
        decrement: (state) => {
            state.amount -= 1;
        },
    },
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;