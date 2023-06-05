import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../thunk/fetchUser';

const initialState = {
    userNo: 0,
    userId: '',
    error: 'true',
}

const userSlice = createSlice({
    name: 'userInfo',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.userNo = action.payload.userNo;
            state.userId = action.payload.userId;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            if(action.payload !== undefined) {
                state.userNo = action.payload.userNo;
                state.userId = action.payload.userId;
            };
        })
        
        
      }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;