import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { boardList } from '../../api/board';
import { BoardListType } from '../../types/board';

const Board: React.FC = () => {
    const navigate = useNavigate();
    const [boardData, setBoardData] = useState<BoardListType[]>([]);
  
  // 데이터를 불러오는 함수
  const loadData = async () => {
    
    const resultData = await boardList();
    console.log("resultData : ",resultData.data);

    setBoardData(resultData.data)
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
              {boardData && boardData.map((data, index) => {
                return (
                  <tr>
                      <td>{data.boardNo}</td>
                      <td><Link to={`/board/detail?param=${data.boardNo}`}>{data.title}</Link></td>
                      <td>{data.userId}</td>
                      <td>{data.regDt}</td>
                  </tr>
                )
              })}
            </tbody>
        </Table>
    </Container>
  );
};

export default Board;
