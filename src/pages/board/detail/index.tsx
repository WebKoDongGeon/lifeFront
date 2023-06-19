import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { boardDetail, boardUpdate } from "../../../api/board";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BoardType } from "../../../types/board";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { userType } from "../../../types/user";

enum paramType {
    Detail = 'detail',
    Update = 'update',
}

const BoardDetail = () => {
    const param = useLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const searchParams = new URLSearchParams(param.search);
    const boardNo = searchParams.get("param");

    const [data, setData] = useState<BoardType>();
    const [type, setType] = useState('detail')
    const [title, setTitle] =useState('');
    const [content, setContent] =useState('');
    const [file, setFile] = useState<File | null>(null);
    const [company, setCompany] = useState('');
    const [skill, setSkill] = useState('');
    const userId = useSelector((state: {user: userType}) => state.user?.userId)

    //년, 월, 일
    const now = dayjs();
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

    // ---------------------------- 위쪽 상태관리 --------------------------------
    // ---------------------------- 아래쪽 함수 및 데이터 변동관련 --------------------------------

    //데이터 불러오기.
    const loadData = async (boardNo: string) => {
        const resultData = await boardDetail(boardNo);

        console.log("resultData :: ",resultData);
        setData(resultData.data);
        setCompany(resultData.data.company)
        setTitle(resultData.data.title)
        setContent(resultData.data.content)
        setSkill(resultData.data.skill)

    }

    const saveData = async () => {
        
        const data = {
            boardNo: boardNo,
            userId: userId,
            company: company,
            title: title,
            content: content,
            skill: skill,
            startProject: year+'-'+month+'-'+day,
            endProject: endYear+'-'+endMonth+'-'+endDay,
            modDt: now.format('YYYY-MM-DD HH:mm:ss')
        }

        const formData = new FormData();
        formData.append('board', new Blob([JSON.stringify(data)], { type: 'application/json' }));
        if (file) {
            formData.append('image', file, file.name);
        }

        await boardUpdate(formData);
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFile(event.target.files ? event.target.files[0] : null);
    };

    useEffect(()=>{
        if(boardNo !== null && type === paramType.Detail) {
            loadData(boardNo);
        }

    },[boardNo, type])
    return (
        <>
            <Container>
                {data && 
                <Form>
                    <Form.Group controlId="company">
                        <Form.Label>회사명</Form.Label>
                        <Form.Control type="text" value={type === paramType.Detail ? data.company : company} onChange={e => setCompany(e.target.value)} />
                    </Form.Group>
                    <hr />
                    <Form.Group controlId="title">
                        <Form.Label>제목</Form.Label>
                        <Form.Control type="text" value={type === paramType.Detail ? data.title : title} onChange={e => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="content">
                        <Form.Label>내용</Form.Label>
                        <Form.Control as="textarea" rows={3} value={type === paramType.Detail ? data.content : content} onChange={e => setContent(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="skill">
                        <Form.Label>사용 기술</Form.Label>
                        <Form.Control type="text" value={type === paramType.Detail ? data.skill : skill} onChange={e => setSkill(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="startDate">
                        <Form.Label>프로젝트 시작 기간</Form.Label>
                        {type === paramType.Detail && 
                            <Row>
                                <Col>
                                    <Form.Control type="text" value={data.startProject} />
                                </Col>
                            </Row>
                        }
                        {type === paramType.Update && 
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
                        }
                    </Form.Group>

                    <Form.Group controlId="endDate">
                        <Form.Label>프로젝트 종료 기간</Form.Label>
                        {type === paramType.Detail && 
                            <Row>
                                <Col>
                                    <Form.Control type="text" value={data.endProject} />
                                </Col>
                            </Row>
                        }

                        {type === paramType.Update && 
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
                        }
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>화면 이미지</Form.Label>
                        {type === paramType.Detail ? 
                            <Form.Control type='text' value={data.originalImageName} disabled/>
                        : <Form.Control 
                                disabled={type === paramType.Detail ? true : false} 
                                id="file" 
                                value={''} 
                                onChange={handleFileChange} type="file" multiple aria-label="파일 이미지 업로드" 
                            />
                        }
                    </Form.Group>
                    
                    <hr />
                    {type === paramType.Detail &&
                        <Button variant="primary"
                            onClick={() => setType(paramType.Update)}
                        >
                            수정
                        </Button>
                    }

                    {type === paramType.Update &&
                    <>
                        <Button variant="primary"
                            onClick={() => {
                                saveData()
                            }}
                        >
                            저장
                        </Button>
                        {' '}
                        <Button variant="secondary"
                            onClick={() => {
                                setType(paramType.Detail)
                                
                            }}
                        >
                            취소
                        </Button>
                    </>
                    }
                </Form>
                }
            </Container>
        </>
    );
};


export default BoardDetail;