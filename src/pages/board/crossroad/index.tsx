import { useParams } from "react-router-dom";
import BoardCreate from "../new";
import BoardDetail from "../detail";

const BoardCrossroad = () => {
    const {type} = useParams();

    return(
        <>
            {type === 'new' && <BoardCreate />}
            {type === 'detail' && <BoardDetail />}
        </>
    );
};

export default BoardCrossroad;