import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface BoardListProps {
  boards: Board[];
}

interface Board {
  id: number;
  name: string;
  path: string;
}

const BoardList: React.FC<BoardListProps> = ({ boards }) => {
  return (
    <div className="BoardList">
      <ListGroup>
        {boards.map((board: Board) => (
          <ListGroup.Item key={board.id}>
            <Link to={board.path}>{board.name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default BoardList;
