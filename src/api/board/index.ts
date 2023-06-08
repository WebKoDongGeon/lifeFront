import server from "..";

export const boardList = async (data: any) => {
    const resultData = await server.get('/board', data).then((result) => {
        return result
    });
    /**
     * response: data(json): userInfo, jwt토큰(액세스, 리프레시)
     */
    return resultData
}