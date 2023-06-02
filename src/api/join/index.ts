import server from "..";
import { JoinType } from "../../types/join";


export const userJoin = async(data: JoinType) => {
    const resultData = await server.post('/join', data).then((result) => {
        return result
    });
    /**
     * response: data(String): 회원가입 성공, 실패 메시지
     */
    return resultData;
} 