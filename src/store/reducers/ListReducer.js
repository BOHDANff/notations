import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id: 1,
            title: 'fdsgdfgdfgdfhfghg',
            body: 'dfhfghfghf'
        },
        {
            id: 2,
            title: 'kahdgfgak,duakda.id',
            body: 'rrrrrrrrrrrrrr rrrrrrrrrrrrrr rrrrrrrrrrrrrrrrduadhaliudkegfkueyf'
        },
        {
            id: 3,
            title: 'kahdgfgak,duakda.id',
            body: 'rrrrrrrrrrrrrr rrrrrrrrrrrrrr rrrrrrrrrrrrrrrrduadhaliudkegfkueyf'
        },
        {
            id: 4,
            title: 'kahdgfgak,duakda.id',
            body: 'rrrrrrrrrrrrrr rrrrrrrrrrrrrr rrrrrrrrrrrrrrrrduadhaliudkegfkueyf'
        }
    ]
}
export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        deleteItem(state, action){
            state.list = state.list.filter(el => el.id !== action.payload)
        },
    }
})

export const {deleteItem} = listSlice.actions

export default listSlice.reducer