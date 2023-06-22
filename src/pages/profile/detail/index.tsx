import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { boardDetail } from "../../../api/board";
import { Alert, Button, Col, Image, Modal, Row } from "react-bootstrap";
import { ProfileType } from "../../../types/profile";

type ProfileDetailProps = {
    boardNo: number;
    setDetailModal: (value: boolean) => void;
  };

const ProfileDetail: React.FC<ProfileDetailProps> = ({boardNo, setDetailModal}) => {
    const [dataCheck, setDataCheck] = useState(false);
    const [data, setData] = useState<ProfileType>();
    
    const navigate = useNavigate();

    const loadData = async (boardNo: number) => {
        const resultData = await boardDetail(boardNo.toString());
        
        if(resultData.data === "") {
            setDataCheck(true);
        }

        console.log("프로필 디테일 : ",resultData.data);
        setData(resultData.data);

    }

    useEffect(()=>{
        if(typeof boardNo === 'number') {
            loadData(boardNo);
        }

    },[boardNo])
    
    return (
        <>
        {dataCheck && 
            <Modal show={dataCheck}>
                <Modal.Body>
                    <Alert variant="danger">
                        잘못된 경로입니다.
                        {' '}
                        <Button variant="danger" onClick={()=>{
                            setDetailModal(false);
                            navigate('/profile')
                        }}>
                            확인
                        </Button>
                    </Alert>
                </Modal.Body>
        </Modal>
        }
        {data && 
            <Modal 
                show={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={()=>setDetailModal(false)}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h6 className="d-inline-block mb-2 text-primary">{`[ ${data.company} ]`}</h6>
                        <h4>{data.title}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} sm={8}>
                            {data.content}
                        </Col>
                        <Col xs={6} sm={4}>
                            <div className="image-wrapper">
                                <Image src={`http://localhost:8080/file/${data.saveImageName}`} />
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col >
                            <p className="d-inline-block mb-2 text-danger">프로젝트 시작일 : {data.startProject}</p>
                        </Col>
                        <Col >
                            <p className="d-inline-block mb-2 text-danger">프로젝트 종료일 : {data.endProject}</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={6} md={4}>
                            <p className="d-inline-block mb-2 text-danger">스킬 : {data.skill}</p>
                        </Col>
                    </Row>
                    
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        }
        </>
    );
};

export default ProfileDetail;