import { useSelector } from "react-redux";
import { userType } from "../../types/user";
import { ProfileType } from "../../types/profile";
import { useEffect, useState } from "react";
import { getProfile } from "../../api/profile";
import { Col, Container, Image, Row } from "react-bootstrap";
import { myPage } from "../../api/mypage";

const MyPage = () => {
    const userNo = useSelector((state: {user: userType}) => state.user?.userNo)
    const [userData, setUserData] = useState<ProfileType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await myPage(userNo.toString());
            // setUserData(response);
        } catch (error) {
            console.log(error);
        }
        };

        fetchData();
    }, [userNo]);

    // if (!userData) {
    //     return <div>Loading...</div>;
    // }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    
                    <Image 
                        style={{width: '171px', height: '180px'}}
                        roundedCircle 
                        src={"https://avatars.githubusercontent.com/u/124127110?s=400&u=817277e11797b367fe3d50d64d14fbca3c1e8e8f&v=4"}
                        onClick={()=>{}}
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-body-secondary">
                    <p className="font-weight-bold">이름 : {userData?.userId}</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-body-secondary">
                    <p className="font-weight-bold">나이 : {userData?.userId}</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-body-secondary">
                    <p className="font-weight-bold">성별 : {userData?.userId}</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-body-secondary">
                    <p className="font-weight-bold">휴대전화 : {userData?.userId}</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-body-secondary">
                    <p className="font-weight-bold">이메일 : {userData?.userId}</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2" className="text-body-secondary">
                    <p className="font-weight-bold">비밀번호 : {userData?.userId}</p>
                </Col>
            </Row>

        </Container>
    );
};

export default MyPage;