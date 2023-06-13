import server from "..";

export const getProfile = async (data: String) => {
    
    const resultData = await server.get(`/profile/${data}`).then((result) => {
        return result
    });
    /**
     * response: data(json): userInfo, jwt토큰(액세스, 리프레시)
     */
    return resultData
}