import { createSlice } from "@reduxjs/toolkit";

export const allusersSlice=createSlice({
    name:"alluser",
    initialState:[],
    reducers:{
        add_all_users:(state,action)=>{
            state.push(action.payload)
        }
    }


})
export const {add_all_users} = allusersSlice.actions
export default allusersSlice.reducer