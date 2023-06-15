import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { boardDetail } from "../../../api/board";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BoardType } from "../../../types/board";

const BoardDetail = () => {
    const param = useLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const searchParams = new URLSearchParams(param.search);
    const boardNo = searchParams.get("param");
    const [data, setData] = useState<BoardType>();

    const loadData = async (boardNo: string) => {
        const resultData = await boardDetail(boardNo);

        console.log("resultData :: ",resultData);
        setData(resultData.data);
    }


    useEffect(()=>{

        if(boardNo !== null) {
            loadData(boardNo);
        }
    },[boardNo])
    return (
        <>
            <Container>
                {data && 
                <Form>
                    <Form.Group controlId="company">
                        <Form.Label>회사명</Form.Label>
                        <Form.Control type="text" value={data.company} />
                    </Form.Group>
                    <hr />
                    <Form.Group controlId="title">
                        <Form.Label>제목</Form.Label>
                        <Form.Control type="text" value={data.title} />
                    </Form.Group>

                    <Form.Group controlId="content">
                        <Form.Label>내용</Form.Label>
                        <Form.Control as="textarea" rows={3} value={data.content} />
                    </Form.Group>

                    <Form.Group controlId="skill">
                        <Form.Label>사용 기술</Form.Label>
                        <Form.Control type="text" value={data.skill} />
                    </Form.Group>

                    <Form.Group controlId="startDate">
                        <Form.Label>프로젝트 시작 기간</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control type="text" value={data.startProject} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group controlId="endDate">
                        <Form.Label>프로젝트 종료 기간</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control type="text" value={data.endProject} />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>화면 이미지</Form.Label>
                        <Form.Control disabled id="file" value={data.fileImage} type="file" multiple aria-label="파일 이미지 업로드" />
                    </Form.Group>
                    
                    <hr />

                    <Button variant="primary" type="submit">
                        수정
                    </Button>
                </Form>
                }
            </Container>
        </>
    );
};


export default BoardDetail;