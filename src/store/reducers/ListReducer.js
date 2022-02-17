import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list: [],

}
export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        deleteItem(state, action){
            state.list = state.list.filter(el => el.id != action.payload)
            // I use not strict comparison !== because id in payload
            // could be string when I take it from query params
        },
        createItem(state, action){
            state.list.push(action.payload)
        },
    }
})

export const {deleteItem, createItem} = listSlice.actions

export default listSlice.reducer