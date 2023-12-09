import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:8080',
    baseURL: 'https://2a63-173-63-49-50.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});