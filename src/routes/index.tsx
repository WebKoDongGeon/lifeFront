import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../pages/login";
import Main from "../pages";
import Join from "../pages/join";
import SideBar from "../pages/common/sideBar";
import Board from "../pages/board";

const Router = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={3} style={{paddingLeft: 0}}>
                        <SideBar />
                    </Col>
                    <Col sm={9}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/board" element={<Board />} />
                    </Routes>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Router;
