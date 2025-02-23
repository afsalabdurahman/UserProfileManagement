import { createSlice } from "@reduxjs/toolkit";

export const allUsersSlice=createSlice({
    name:"alluser",
    initialState:[],
    reducers:{
        add_all_users:(state,action)=>{
            state.push(action.payload)
        }
    }


})
export const {add_all_users} = allUsersSlice.actions
export default allUsersSlice.reducer