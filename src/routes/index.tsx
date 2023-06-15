import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../pages/login";
import Main from "../pages";
import Join from "../pages/join";
import SideBar from "../pages/common/sideBar";
import Board from "../pages/board";
import Profile from "../pages/profile";
import { useState } from "react";
// import BoardCreate from "../pages/board/new";
import BoardCrossroad from "../pages/board/crossroad";

const Router = () => {
    const [checkMenu, setCheckMenu] = useState(false);

    return (
        <div>
            <Container fluid>
                <Row>
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
                    </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Router;
