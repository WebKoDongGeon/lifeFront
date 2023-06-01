import server from "..";
import { JoinType } from "../../types/join";


export const userJoin = async(data: JoinType) => {
    await server.post('/join', data).then((result) => {
        console.log("result : ",result);
    })
} 