import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        setTrainerName: (state, action) => action.payload
    }
})

export const { setTrainerName } = trainerNameSlice.actions  // trainerName ¿?

export default trainerNameSlice.reducer