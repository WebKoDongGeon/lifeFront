import React, { useState, useEffect } from 'react';
import { Container, Table, Pagination } from 'react-bootstrap';
import BoardList from './boardHeader';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const Board: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [boardList, setBoardList] = useState<string[]>([])
  const postsPerPage = 10;
  const pages = Math.ceil(posts.length / postsPerPage);
  
  // 데이터를 불러오는 함수
  const loadData = async () => {
    // 원하는 데이터를 불러옵니다 여기서는 예시로 임의의 데이터를 사용합니다.
    const dummyData: Post[] = [
      {id: 1, title: 'Title 1', content: 'Content 1', author: 'Author 1', date: '2023-01-01'},
      // ...
    ];

    setPosts(dummyData);
  };


  
  
  useEffect(() => {
    loadData();
    setBoardList(boardList => [...boardList, '야구 게시판']);
  }, []);

  return (
    <Container className='mt-5'>
        <BoardList boards={boardList}/>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
            </tr>
            </thead>
            <tbody>
            {posts
                .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
                .map((post, idx) => (
                <tr key={post.id}>
                    <td>{idx + 1}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.date}</td>
                </tr>
                ))}
            </tbody>
        </Table>
        <Pagination>
            {[...Array(pages).keys()].map(page => (
                <Pagination.Item
                    key={page + 1}
                    active={page + 1 === currentPage}
                    onClick={() => setCurrentPage(page + 1)}
                >
                    {page + 1}
                </Pagination.Item>
            ))}
        </Pagination>
    </Container>
  );
};

export default Board;
