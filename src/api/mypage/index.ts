import server from "..";

export const myPage = async (data: string) => {
    const resultData = await server.get(`/mypage/${data}`).then((result) => {
        return result
    });
    /**
     */
    return resultData
}