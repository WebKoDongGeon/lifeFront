import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:8080', //요청의 기본 URL 설정 (서버쪽)
    timeout: 5000, //요청 타임아웃(ms) 설정
});

export default server;