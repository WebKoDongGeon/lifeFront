import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../pages/login";
import Main from "../pages";
import Join from "../pages/join";
import SideBar from "../pages/common/sideBar";
import Board from "../pages/board";
import Profile from "../pages/profile";
import { useState } from "react";
import BoardCrossroad from "../pages/board/crossroad";
import Footer from "../pages/common/footer";
import MyPage from "../pages/mypage";
import Shop from "../pages/shop";

const Router = () => {
    const [checkMenu, setCheckMenu] = useState(false);

    return (
        <div>
            <Container fluid>
                <Row>
                    {/* <Header /> */}
                    <Col sm={checkMenu ? 3 : 0} style={{paddingLeft: 0}}>
                        <SideBar checkMenu={setCheckMenu}/>
                    </Col>
                    <Col sm={checkMenu ? 9: 12}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/board" element={<Board />} />
                        
                        <Route path="/board/:type" element={<BoardCrossroad />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/mypage" element={<MyPage />}/>
                        <Route path="/shop" element={<Shop />}/>
                    </Routes>
                    <Footer />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Router;
