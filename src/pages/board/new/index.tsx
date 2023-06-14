import { FormEventHandler, useEffect, useState } from "react";
import { Alert, Button, Container, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { userType } from "../../../types/user";
import { boardSave } from "../../../api/board";
import dayjs from "dayjs";
import { fileUpload } from "../../../api/file";
import { dataGet } from "../../common/dateGet";

const BoardCreate = () => {
    const { type } = useParams();
    const [title, setTitle] =useState('');
    const [content, setContent] =useState('');
    const [file, setFile] = useState<File | null>(null);
    const userId = useSelector((state: {user: userType}) => state.user?.userId)
    const navigate = useNavigate();

    //모달용
    const [saveCheck, setSaveCheck] = useState(false);
    const now = dayjs();

    //년, 월, 일
    const [year, setYear] = useState<number[]>([]);
    const [month, setMonth] = useState<number[]>([]);
    const [day, setDay] = useState<number[]>([]);

    const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            userId: userId,
            title: title,
            content: content,
            regDt: now.format('YYYY-MM-DD HH:mm:ss')
        }
        
        const formData = new FormData();
        formData.append('board', new Blob([JSON.stringify(data)], { type: 'application/json' }));
        if (file) {
            formData.append('image', file, file.name);
        }
        const resultData = await boardSave(formData);

        console.log("resultData : ",resultData);
        if(resultData.status === 201 && resultData.data > 0) {
            //반환받은 게시글 번호를 formData에 담아 파일업로드 테이블에 보낸다.
            formData.append('postId', new Blob([JSON.stringify(resultData.data)], { type: 'application/json' }));
            await fileUpload(formData);

            setSaveCheck(true);
        }

    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event.target.files : ",event.target.files);
        setFile(event.target.files ? event.target.files[0] : null);
    };

    const dayHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event.target : ",event.target.value);
    }

    useEffect(()=> {
        setYear(dataGet().years);
    },[])
    
    return (
        <>
        <Container>
            {/* 저장시 나오는 모달 팝업. */}
            {saveCheck &&
                <Modal show={saveCheck}>
                    <Modal.Header>
                        <Modal.Title>게시글 저장완료</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <Alert variant="primary">
                                저장되었습니다.
                            </Alert>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={()=>navigate('/')}>
                            확인
                        </Button>
                        </Modal.Footer>
                </Modal>
            }

            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" rows={3} value={content} onChange={e => setContent(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Label>기간</Form.Label>
                    <Form.Control as={"select"} onChange={dayHandle}>
                        {year.map((data, index) => {
                           return <option key={index} value={data}>{data}</option>
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>이미지</Form.Label>
                    <Form.Control id="file" onChange={handleFileChange} type="file" multiple aria-label="파일 이미지 업로드" />
                </Form.Group>

                <hr />
                <Button variant="primary" type="submit">
                저장
                </Button>
                {' '}
                <Button variant="secondary">
                취소
                </Button>
                {' '}
                {type === 'delete' && (
                    <Button variant="danger">
                        삭제
                    </Button>
                )}
            </Form>
        </Container>
        </>
    );
};

export default BoardCreate;