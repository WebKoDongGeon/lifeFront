import server from "..";
import { LoginType } from "../../types/login";

export const login = async (data: LoginType) => {
    const resultData = await server.post('/login', data).then((result) => {
        return result
    });
    /**
     * response: data(json): userInfo, jwt토큰(액세스, 리프레시)
     */
    return resultData
}