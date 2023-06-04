import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userNo: 0,
    userId: '',
    loading: 'idle'
}

const userSlice = createSlice({
    name: 'userInfo',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.userNo = action.payload.userNo;
            state.userId = action.payload.userId;
        }
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;