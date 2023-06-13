import server from "..";

export const fileUpload = async (data: any) => {
    const resultData = await server.post('/upload', data).then((result) => {
        return result
    });
    /**
     * response: data(json): userInfo, jwt토큰(액세스, 리프레시)
     */
    return resultData
}