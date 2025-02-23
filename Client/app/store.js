import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import alluserRedcer from './allUserSlice'
import searchReducer from './searchquery'
const store = configureStore({
  reducer: {
    users: userReducer,
    alluser:alluserRedcer,
    search:searchReducer
   
    // This will handle the users' state
  },
});

export default store;
