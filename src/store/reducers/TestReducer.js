import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    count: 0,
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        plus(state, action){
            state.count += action.payload
        },
        minus(state, action){
            state.count -= action.payload
        },
    }
})

export const {plus, minus} = testSlice.actions

export default testSlice.reducer;