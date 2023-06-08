import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
interface BoardListProps {
  boards: string[]
}

const BoardList: React.FC<BoardListProps> = ({boards}) => {
  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            {boards.map((board, index: number) => (
              <th>
                <Link to={"/"}>{board}</Link>
              </th>
            ))}
          </tr>
        </thead>
      </Table>
    </div>
  );
}

export default BoardList;
