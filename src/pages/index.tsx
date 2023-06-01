import { Link } from "react-router-dom";
import "./index.css"; // 작성한 CSS 파일을 불러옵니다.

const Main = () => {
    return (
        <div className="main-container">
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">홈</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">로그인</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/join" className="nav-link">회원가입</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Main;
