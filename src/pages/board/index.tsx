import React, { useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Board: React.FC = () => {
    const navigate = useNavigate();
//   const [boardHeader, setBoardHeader] = useState<any[]>([])
  
  // 데이터를 불러오는 함수
  const loadData = async () => {
    // 원하는 데이터를 불러옵니다 여기서는 예시로 임의의 데이터를 사용합니다.
    // console.log("resultData : ",resultData);
    // const dummyData: BoardType[] = [
    //       {id: 1, title: 'Title 1', content: 'Content 1', userId: 'Author 1', regDt: '2023-01-01'},
    //       // ...
    //     ];
    // const resultData = await boardList(dummyData);

    // setPosts(resultData);
  };

  const createButton = () => {
    navigate('new');
  }
  
  useEffect(() => {
    loadData();
    // setBoardHeader(['야구 게시판','계란 게시판', '심청이']);
  }, []);

  return (
    <Container className='mt-5'>
        {/* <BoardList boards={boardHeader}/> */}
        <Button 
                variant="primary"
                className="mb-3"
                onClick={createButton}
            >
            생성
        </Button>
        <hr />
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>No</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
            </tr>
            </thead>
            <tbody>
            
            </tbody>
        </Table>
    </Container>
  );
};

export default Board;
