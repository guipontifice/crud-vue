import axios from 'axios';

const api = axios.create({
    baseURL: 'https://freeapi.miniprojectideas.com/api/',
    timeout: 10000,
})

export default api;