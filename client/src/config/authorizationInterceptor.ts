import axios from 'axios';


const http = axios.create();
http.interceptors.request.use(
    request => {
        if (!(request.url?.includes("signup") || request.url?.includes("signin"))) {
            request.headers["Authorization"] = 'Bearer ' + "iAmATokenSomeday";
        }
        return request;
    },
    error => {
        return Promise.reject(error);
    })

export default http;