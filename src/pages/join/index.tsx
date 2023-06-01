import { useState } from "react";
import "./Join.css";
import { userJoin } from "../../api/join";

const Join = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("M");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 서버에 넘길 데이터 셋팅
    console.log("event : ", event.target);

    const data = {
        userId: userId,
        userPw: userPw,
        email: email,
        gender: gender
    }
    //회원가입 api 호출
    const result = userJoin(data);
  };

  return (
    <div className="join-container">
      <form onSubmit={handleSubmit}>
        <h2 className="join-heading">회원가입</h2>
        <div className="join-form-group">
          <label>이름</label>
          <input
            type="text"
            name="username"
            value={userId}
            onChange={(event) => {
              setUserId(event.target.value);
            }}
          />
        </div>
        <div className="join-form-group">
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="join-form-group">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={userPw}
            onChange={(event) => {
              setUserPw(event.target.value);
            }}
          />
        </div>
        <div className="join-form-group">
          <label>성별</label>
          <input
            type="radio"
            name="gender"
            value="M"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
          남자
          <input
            type="radio"
            name="gender"
            value="F"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
          여자
        </div>
        <button type="submit" className="join-button">가입</button>
      </form>
    </div>
  );
};

export default Join;
