import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:8080',
    baseURL: 'https://patient-composed-doberman.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});