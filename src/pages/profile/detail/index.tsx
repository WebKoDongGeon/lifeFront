import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { boardDetail } from "../../../api/board";
import { Alert, Button, Modal } from "react-bootstrap";
import { BoardType } from "../../../types/board";

type ProfileDetailProps = {
    boardNo: number;
    setA: (value: boolean) => void;
  };

const ProfileDetail: React.FC<ProfileDetailProps> = ({boardNo, setA}) => {
    const [dataCheck, setDataCheck] = useState(false);
    const [data, setData] = useState<BoardType>();
    
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
                            setA(false);
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
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h6 className="d-inline-block mb-2 text-primary">{`[ ${data.company} ]`}</h6>
                        <h4>{data.title}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.content}
                    <div>
                        <p className="d-inline-block mb-2 text-danger">스킬 : {data.skill}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        }
        </>
    );
};

export default ProfileDetail;