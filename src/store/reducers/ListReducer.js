import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list: [],

}
export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        deleteItem(state, action){
            state.list = state.list.filter(el => el.id !== action.payload)
        },
        createItem(state, action){
            state.list.push(action.payload)
        },
        editItem(state, action){
           let index = state.list.findIndex(el => el.id === action.payload.id)
            state.list[index] = action.payload
        },
    }
})

export const {deleteItem, createItem, editItem} = listSlice.actions

export default listSlice.reducer