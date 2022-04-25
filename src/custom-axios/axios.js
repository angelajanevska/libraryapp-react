import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9099/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;
