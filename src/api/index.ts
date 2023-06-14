import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:8080', //요청의 기본 URL 설정 (서버쪽)
    timeout: 5000, //요청 타임아웃(ms) 설정
});


axios.interceptors.request.use((config) => {
    if (config.url !== '/login') {
        const token = localStorage.getItem('token');
        const refreshToken = token;
    
        if (refreshToken) {
        config.headers['Authorization'] = `Bearer ${refreshToken}`;
        }
    }
  
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

axios.interceptors.response.use(
    (response) => {

      console.log("끼야 인터셉터다! : ",response);
      // 응답 데이터 처리
      return response;
    },
    (error) => {
      // 응답 에러 처리
      return Promise.reject(error);
    }
  ); 

export default server;