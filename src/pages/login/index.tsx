import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/thunk/fetchUser";
import { ThunkDispatch } from '@reduxjs/toolkit';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        //서버에 넘길 데이터 셋팅

        console.log("event : ",event.target);

        console.log("userId : ",userId);
        console.log("userPw : ",userPw);

        const data = {
            userId: userId,
            userPw: userPw
        }

        dispatch(fetchUser(data))
        
    }

    return (
        <>
            <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>아이디:</label>
                <input
                    type="text"
                    name="userId"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                />
                </div>
                <div>
                <label>비밀번호:</label>
                <input
                    type="password"
                    name="userPw"
                    value={userPw}
                    onChange={(event) => setUserPw(event.target.value)}
                />
                </div>
                <button type="submit">Login</button>
            </form>
            </div>
        </>
    );
}

export default Login;