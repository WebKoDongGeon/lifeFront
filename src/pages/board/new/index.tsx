import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { userType } from "../../../types/user";
import { boardSave } from "../../../api/board";
import dayjs from "dayjs";
import { fileUpload } from "../../../api/file";

const BoardCreate = () => {
    const { type } = useParams();
    const [title, setTitle] =useState('');
    const [content, setContent] =useState('');
    const [file, setFile] = useState<File | null>(null);
    const [company, setCompany] = useState('');
    const [skill, setSkill] = useState('');
    const userId = useSelector((state: {user: userType}) => state.user?.userId)
    const navigate = useNavigate();

    //모달용
    const [saveCheck, setSaveCheck] = useState(false);
    const now = dayjs();

    //년, 월, 일
    // 현재 년도를 가져옵니다.
    const currentYear = dayjs().year();
    // 현재 년도에서 12년 전까지의 년도를 배열로 가져옵니다.
    const yearArray = Array.from({ length: 13 }, (_, i) => currentYear - i);
    // 1월부터 12월까지의 월을 배열로 가져옵니다.
    const monthArray = Array.from({ length: 12 }, (_, i) => i + 1);

    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(1);
    const [day, setDay] = useState(1);
    const [daysInMonth, setDaysInMonth] = useState(dayjs().daysInMonth());

    //종료일
    const [endYear, setEndYear] = useState(currentYear);
    const [endMonth, setEndMonth] = useState(1);
    const [endDay, setEndDay] = useState(1);
    const [endDaysInMonth, setEndDaysInMonth] = useState(dayjs().daysInMonth());

    const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const data = {
            userId: userId,
            company: company,
            title: title,
            content: content,
            skill: skill,
            startProject: year+'-'+month+'-'+day,
            endProject: endYear+'-'+endMonth+'-'+endDay,
            regDt: now.format('YYYY-MM-DD HH:mm:ss')
        }
        
        const formData = new FormData();
        formData.append('board', new Blob([JSON.stringify(data)], { type: 'application/json' }));
        if (file) {
            formData.append('image', file, file.name);
        }
        const resultData = await boardSave(formData);

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

    useEffect(()=>{
        setDaysInMonth(dayjs(`${year}-${month}-01`).daysInMonth());
        setEndDaysInMonth(dayjs(`${endYear}-${endMonth}-01`).daysInMonth());
    },[year, month, endYear, endMonth]);
    
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
                <Form.Group controlId="company">
                    <Form.Label>회사명</Form.Label>
                    <Form.Control type="text" value={company} onChange={e => setCompany(e.target.value)} />
                </Form.Group>
                <hr />
                <Form.Group controlId="title">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" rows={3} value={content} onChange={e => setContent(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="skill">
                    <Form.Label>사용 기술</Form.Label>
                    <Form.Control type="text" value={skill} onChange={e => setSkill(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="startDate">
                    <Form.Label>프로젝트 시작 기간</Form.Label>
                    <Row>
                        <Col>
                        <Form.Control as={"select"} onChange={e => setYear(parseInt(e.target.value))}>
                            {yearArray.map((data, index) => {
                                return <option key={index} value={data}>{data}년</option>
                            })}
                        </Form.Control>
                        </Col>
                        <Col>
                        <Form.Control as={"select"} onChange={e => setMonth(parseInt(e.target.value))}>
                            {monthArray.map((data, index) => {
                                return <option key={index} value={data}>{data}월</option>
                            })}
                        </Form.Control>
                        </Col>
                        <Col>
                        <Form.Control as="select" value={day} onChange={e => setDay(parseInt(e.target.value))}>
                            {Array.from({length: daysInMonth}, (_, i) => i + 1).map((day, index) => {
                                return <option key={index} value={day}>{day}일</option>
                            })}
                        </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="endDate">
                    <Form.Label>프로젝트 종료 기간</Form.Label>
                    <Row>
                        <Col>
                        <Form.Control as={"select"} onChange={e => setEndYear(parseInt(e.target.value))}>
                            {yearArray.map((data, index) => {
                                return <option key={index} value={data}>{data}년</option>
                            })}
                        </Form.Control>
                        </Col>
                        <Col>
                        <Form.Control as={"select"} onChange={e => setEndMonth(parseInt(e.target.value))}>
                            {monthArray.map((data, index) => {
                                return <option key={index} value={data}>{data}월</option>
                            })}
                        </Form.Control>
                        </Col>
                        <Col>
                        <Form.Control as={"select"} value={endDay} onChange={e => setEndDay(parseInt(e.target.value))}>
                            {Array.from({length: endDaysInMonth}, (_, i) => i + 1).map((day, index) => {
                                return <option key={index} value={day}>{day}일</option>
                            })}
                        </Form.Control>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>화면 이미지</Form.Label>
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