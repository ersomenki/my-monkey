import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: 'This is the text to type.',
    userInput: '',
    startTime: null,
    endTime: null,
    errors: 0,
};

const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action.payload;
        },
        setStartTime: (state, action) => {
            state.startTime = action.payload;
        },
        setEndTime: (state, action) => {
            state.endTime = action.payload;
        },
        incrementErrors: (state) => {
            state.errors += 1;
        },
        reset: (state) => {
            return initialState;
        },
    },
});

export const { setUserInput, setStartTime, setEndTime, incrementErrors, reset } = textSlice.actions;

export default textSlice.reducer;
