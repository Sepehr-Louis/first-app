import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    users:[],

}
const addUserSlice = createSlice({
    name:'cal',
    initialState,
    reducers:{
        adduser:(state,action) =>{
            state.users.push(action.payload) 
        }

    }
})
export const {adduser} = addUserSlice.actions;
export default addUserSlice.reducer;  