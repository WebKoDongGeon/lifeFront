import server from "..";
import { BoardType } from "../../types/board";

export const boardList = async () => {
    const resultData = await server.get('/board').then((result) => {
        return result
    });
    /**
     */
    return resultData
}

export const boardDetail = async (data: string) => {
    const resultData = await server.get(`/board/${data}`).then((result) => {
        return result
    });
    /**
     */
    return resultData
}

export const boardUpdate = async (data: FormData) => {
    const resultData = await server.put('/board', data).then((result) => {
        return result
    });
    /**
     */
    return resultData
}

export const boardDelete = async (data: string) => {
    const resultData = await server.delete(`/board/${data}`, ).then((result) => {
        return result
    });
    /**
     */
    return resultData
}



export const boardSave = async (data: FormData) => {
    const resultData = await server.post('/board', data).then((result) => {
        return result
    });
    
    return resultData
}