import { useSelector } from "react-redux";
import { userType } from "../../types/user";
import { ProfileType } from "../../types/profile";
import { useEffect, useState } from "react";
import { getProfile } from "../../api/profile";
import { Col, Container, Image, Row } from "react-bootstrap";

const MyPage = () => {
    const userId = useSelector((state: {user: userType}) => state.user?.userId)
    const [userData, setUserData] = useState<ProfileType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await getProfile(userId);
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
        };

        fetchData();
    }, [userId]);

    if (!userData) {
        return <div>Loading...</div>;
    }

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
                <Col md="auto">
                    나이
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    성별
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    휴대전화
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    이메일
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    비밀번호
                </Col>
            </Row>

        </Container>
    );
};

export default MyPage;