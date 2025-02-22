import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchQuery: "",
    userId:""  // Initial value is an empty string
  }
 
export const serchSlice=createSlice({
name:"search",
initialState,
reducers:{
    searchUser:(state,action)=>{
        state.searchQuery=action.payload
    },
    findUser:(state,action)=>{
        state.userId=action.payload
    }
}
})

export const {searchUser,findUser} =serchSlice.actions
export default serchSlice.reducer