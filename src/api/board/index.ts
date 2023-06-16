import server from "..";

export const boardList = async () => {
    const resultData = await server.get('/board').then((result) => {
        return result
    });
    /**
     * response: data(json): userInfo, jwt토큰(액세스, 리프레시)
     */
    return resultData
}

export const boardDetail = async (data: string) => {
    const resultData = await server.get(`/board/${data}`).then((result) => {
        return result
    });
    /**
     * response: data(json): userInfo, jwt토큰(액세스, 리프레시)
     */
    return resultData
}

export const boardUpdate = async (data: FormData) => {
    const resultData = await server.put('/board', data).then((result) => {
        return result
    });
    /**
     * response: data(json): userInfo, jwt토큰(액세스, 리프레시)
     */
    return resultData
}

export const boardSave = async (data: FormData) => {
    const resultData = await server.post('/board', data).then((result) => {
        console.log("??? : ",result)
        return result
    });
    
    return resultData
}