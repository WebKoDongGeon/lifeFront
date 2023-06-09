import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userType } from "../../../types/user";
import { boardSave } from "../../../api/board";
import dayjs from "dayjs";

const BoardCreate = () => {
    const { type } = useParams();
    const [title, setTitle] =useState('');
    const [content, setContent] =useState('');
    const [file, setFile] = useState<File | null>(null);
    const userId = useSelector((state: {user: userType}) => state.user?.userId)
    const now = dayjs();

    const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            userId: userId,
            title: title,
            content: content,
            regDt: now.format('YYYY-MM-DD HH:mm:ss')
        }
        
        const formData = new FormData();
        // formData.append('board', new Blob([JSON.stringify(data)], { type: 'application/json' }));
        formData.append('board', new Blob([JSON.stringify(data)], { type: 'application/json' }));
        if (file) {
            formData.append('image', file, file.name);
        }

        const resultData = await boardSave(formData);

        console.log("resultData : ",resultData);
        

        
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event.target.files : ",event.target.files);
        setFile(event.target.files ? event.target.files[0] : null);
      };
    
    return (
        <>
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" rows={3} value={content} onChange={e => setContent(e.target.value)} />
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