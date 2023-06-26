import { createAsyncThunk } from '@reduxjs/toolkit';
import server from '../../api';

// AsyncThunk는 두 개의 매개변수를 받는다.
// 1. 액션 타입의 접두사(string)
// 2. 비동기 작업을 수행하는 함수(PAYLOAD CREATOR)
export const fetchUser = createAsyncThunk(
    'user/fetch', //액션 타입의 접두사
    async(userData: {userId: string, userPw: string}, thunkAPI) => {
        const response = await server.post('/login', userData);
        // console.log("response : ",response.data.userInfo);

        localStorage.setItem('token', response.data?.userInfo.refreshToken)
        return response.data.userInfo;
    }
)